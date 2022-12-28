import { createContext, ReactNode, useState } from "react";

import { addDoc, getDocs, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/Firebase";

import { IBoard, ITask } from "../types/boardsAndTasks";

interface IBoardsContext {
  boards: IBoard[] | null;
  createNewBoard: (name: string) => void;
  getBoards: () => void;
}

export const BoardsContext = createContext({} as IBoardsContext);

export const BoardsProvider = ({ children }: { children: ReactNode }) => {
  const [boards, setBoards] = useState<IBoard[] | null>([]);

  const [user] = useAuthState(auth);

  const boardsRef = collection(db, "boards");

  const createNewBoard = async (name: string) => {
    if (user) {
      try {
        await addDoc(boardsRef, {
          ownerId: user.uid,
          name,
        });
        getBoards();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getBoards = async () => {
    if (user) {
      const boardsDocs = await getDocs(boardsRef);
      setBoards(
        boardsDocs.docs.map((board) => ({
          ...board.data(),
          id: board.id,
        })) as IBoard[]
      );

      console.log(boards);
    }
  };

  return (
    <BoardsContext.Provider value={{ boards, getBoards, createNewBoard }}>
      {children}
    </BoardsContext.Provider>
  );
};

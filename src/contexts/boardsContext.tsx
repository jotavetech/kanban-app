import { createContext, ReactNode, useState } from "react";

import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/Firebase";

import { IBoard, ITask } from "../types/boardsAndTasks";

interface IBoardsContext {
  boards: IBoard[] | null;
  createNewBoard: (name: string) => void;
  deleteABoard: (boardId: string) => void;
  getBoards: () => void;
}

export const BoardsContext = createContext({} as IBoardsContext);

export const BoardsProvider = ({ children }: { children: ReactNode }) => {
  const [boards, setBoards] = useState<IBoard[] | null>([]);

  const [user] = useAuthState(auth);

  const boardsCollection = collection(db, "boards");

  const createNewBoard = async (name: string) => {
    if (user) {
      try {
        await addDoc(boardsCollection, {
          ownerId: user.uid,
          name,
        });
        getBoards();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteABoard = async (boardId: string) => {
    if (user) {
      try {
        const boardRef = doc(db, "boards", boardId);
        await deleteDoc(boardRef);
        getBoards();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getBoards = async () => {
    if (user) {
      const boardsQuery = query(
        boardsCollection,
        where("ownerId", "==", user.uid)
      );
      const boardsDocs = await getDocs(boardsQuery);
      setBoards(
        boardsDocs.docs.map((board) => ({
          ...board.data(),
          id: board.id,
        })) as IBoard[]
      );
    }
  };

  return (
    <BoardsContext.Provider
      value={{ boards, getBoards, createNewBoard, deleteABoard }}
    >
      {children}
    </BoardsContext.Provider>
  );
};
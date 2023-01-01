import { createContext, ReactNode, useState } from "react";

import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/Firebase";

import { IBoard, ITask } from "../types/boardsAndTasks";

interface IBoardsContext {
  boards: IBoard[] | null;
  tasks: ITask[] | null;
  createNewBoard: (name: string) => void;
  deleteABoard: (boardId: string) => void;
  getBoards: () => void;
  createNewTask: ({ boardId, name, description }: ITask) => void;
  getTasks: (boardId: string) => void;
  updateTask: (
    taskId: string | undefined,
    taskStatus: TaskStatus,
    boardId: string
  ) => void;
}

type TaskStatus = "todo" | "doing" | "done";

export const BoardsContext = createContext({} as IBoardsContext);

export const BoardsProvider = ({ children }: { children: ReactNode }) => {
  const [boards, setBoards] = useState<IBoard[] | null>([]);
  const [tasks, setTasks] = useState<ITask[] | null>([]);

  const [user] = useAuthState(auth);

  const boardsCollection = collection(db, "boards");

  const createNewBoard = async (name: string) => {
    if (user) {
      try {
        await addDoc(boardsCollection, {
          ownerId: user.uid,
          name,
          createdAt: new Date(),
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

      const boardTasks = query(
        tasksCollection,
        where("ownerId", "==", user.uid)
      );

      const tasksDoc = await getDocs(boardTasks);
      const tasks = tasksDoc.docs.map((task) => task.data()) as ITask[];

      setBoards(
        boardsDocs.docs.map((board) => ({
          ...board.data(),
          id: board.id,
          createdAt: new Date(),
          todos: tasks.filter((task) => {
            return task.boardId === board.id;
          }),
          done: tasks.filter((task) => {
            return task.boardId === board.id && task.status === "done";
          }),
        })) as IBoard[]
      );
    }
  };

  const tasksCollection = collection(db, "tasks");

  const createNewTask = async ({
    boardId,
    name,
    description,
    status,
  }: ITask) => {
    if (user) {
      try {
        await addDoc(tasksCollection, {
          boardId,
          name,
          description,
          status,
          ownerId: user.uid,
          createdAt: new Date(),
        });
        getBoards();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getTasks = async (boardId: string) => {
    if (user) {
      const tasksQuery = query(
        tasksCollection,
        where("boardId", "==", boardId)
      );

      const tasksDocs = await getDocs(tasksQuery);
      setTasks(
        tasksDocs.docs.map((task) => ({
          ...task.data(),
          id: task.id,
        })) as ITask[]
      );
    }
  };

  const updateTask = async (
    taskId: string | undefined,
    taskStatus: TaskStatus,
    boardId: string
  ) => {
    if (user && taskId) {
      try {
        const taskRef = doc(db, "tasks", taskId);
        await updateDoc(taskRef, {
          status: taskStatus,
        });

        getTasks(boardId);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <BoardsContext.Provider
      value={{
        updateTask,
        boards,
        getBoards,
        createNewBoard,
        deleteABoard,
        createNewTask,
        getTasks,
        tasks,
      }}
    >
      {children}
    </BoardsContext.Provider>
  );
};

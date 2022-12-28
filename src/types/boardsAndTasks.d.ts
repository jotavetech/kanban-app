export interface ITask {
  boardId: string;
  name: string;
  description: string;
  status: "todo" | "doing" | "done";
  id?: string;
}

export interface IBoard {
  ownerId: string;
  id: string;
  name: string;
}

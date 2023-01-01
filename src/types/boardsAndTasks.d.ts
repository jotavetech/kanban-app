export interface ITask {
  boardId: string;
  name: string;
  description: string;
  status: "todo" | "doing" | "done";
  id?: string;
  ownerId?: string;
  createdAt?: Date;
}

export interface IBoard {
  ownerId: string;
  id: string;
  name: string;
  todos?: ITask[];
  done?: ITask[];
  createdAt?: Date;
}

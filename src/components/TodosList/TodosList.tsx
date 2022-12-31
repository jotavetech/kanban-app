import { useEffect, useState } from "react";

import List from "./List";

import { ITask } from "../../types/boardsAndTasks";

import { StyledTodosList } from "./styles";

function TodosList({ tasks, boardId }: { tasks: ITask[]; boardId: string }) {
  const [todos, setTodos] = useState<ITask[]>([]);
  const [doing, setDoing] = useState<ITask[]>([]);
  const [done, setDone] = useState<ITask[]>([]);

  useEffect(() => {
    setTodos([]);
    setDoing([]);
    setDone([]);
    mapAllTasks();
  }, [tasks]);

  const mapAllTasks = () => {
    tasks.map((task) => {
      if (task.status === "todo") setTodos((prevState) => [...prevState, task]);
      if (task.status === "doing")
        setDoing((prevState) => [...prevState, task]);
      if (task.status === "done") setDone((prevState) => [...prevState, task]);
    });
  };

  return (
    <StyledTodosList className="animeLeft">
      {todos.length > 0 && (
        <List type={"todo"} tasks={todos} boardId={boardId} />
      )}
      {doing.length > 0 && (
        <List type={"doing"} tasks={doing} boardId={boardId} />
      )}
      {done.length > 0 && <List type={"done"} tasks={done} boardId={boardId} />}
    </StyledTodosList>
  );
}

export default TodosList;

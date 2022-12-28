import { useEffect, useState } from "react";

import List from "./List";

import { ITask } from "../../types/boardsAndTasks";

import { StyledTodosList } from "./styles";

function TodosList({ tasks }: { tasks: ITask[] }) {
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
      <List type={"todo"} tasks={todos} />
      <List type={"doing"} tasks={doing} />
      <List type={"done"} tasks={done} />
    </StyledTodosList>
  );
}

export default TodosList;

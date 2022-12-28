import { useState } from "react";

import { ITask } from "../../../types/boardsAndTasks";

import ChangeStatus from "../ChangeStatus";

import { StyledList } from "./styles";

interface IList {
  type: "todo" | "doing" | "done";
  tasks: ITask[];
}

function List({ type, tasks }: IList) {
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);

  return (
    <>
      <ChangeStatus
        open={isStatusMenuOpen}
        onClose={() => setIsStatusMenuOpen(false)}
      />
      <StyledList type={type} className="animeLeftSlowed">
        <div className="typeTitle">
          <div className="circle"></div>
          <h2>
            {type === "todo" ? "Todo" : type === "doing" ? "Doing" : "Done"}
          </h2>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} onClick={() => setIsStatusMenuOpen(true)}>
              <p>{task.name}</p>
              <span>{task.description}</span>
            </li>
          ))}
        </ul>
      </StyledList>
    </>
  );
}

export default List;

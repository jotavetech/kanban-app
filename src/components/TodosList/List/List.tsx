import { useState } from "react";

import { ITask } from "../../../types/boardsAndTasks";

import ChangeStatus from "../ChangeStatus";

import { StyledList } from "./styles";

interface IList {
  type: "todo" | "doing" | "done";
  tasks: ITask[];
  boardId: string;
}

function List({ type, tasks, boardId }: IList) {
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);

  return (
    <>
      <StyledList type={type} className="animeLeftSlowed">
        <div className="typeTitle">
          <div className="circle"></div>
          <h2>
            {type === "todo" ? "Todo" : type === "doing" ? "Doing" : "Done"}
          </h2>
        </div>
        <ul>
          {tasks.map((task) => (
            <div key={task.id}>
              <li onClick={() => setIsStatusMenuOpen(true)}>
                <p>{task.name}</p>
                <span>{task.description}</span>
              </li>
              <ChangeStatus
                id={task.id}
                actualStatusValue={task.status}
                open={isStatusMenuOpen}
                onClose={() => setIsStatusMenuOpen(false)}
                boardId={boardId}
              />
            </div>
          ))}
        </ul>
      </StyledList>
    </>
  );
}

export default List;

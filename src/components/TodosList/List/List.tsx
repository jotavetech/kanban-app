import { useState } from "react";
import ChangeStatus from "../ChangeStatus";
import { StyledList } from "./styles";

interface IList {
  type: "todo" | "doing" | "done";
}

const tasks = [
  {
    name: "Taskname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi quis urna elementum viverra.",
    id: 1,
  },
  {
    name: "Taskname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi quis urna elementum viverra.",
    id: 2,
  },
  {
    name: "Taskname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi quis urna elementum viverra.",
    id: 3,
  },
  {
    name: "Taskname",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi quis urna elementum viverra.",
    id: 4,
  },
];

function List({ type }: IList) {
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

import { StyledList } from "./styles";

interface IList {
  type: "todo" | "doing" | "done";
}

function List({ type }: IList) {
  return (
    <StyledList type={type} className="animeLeftSlowed">
      <div className="typeTitle">
        <div className="circle"></div>
        <h2>
          {type === "todo" ? "Todo" : type === "doing" ? "Doing" : "Done"}
        </h2>
      </div>
      <ul>
        <li>
          <p>Taskname</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi
            quis urna elementum viverra.
          </span>
        </li>
        <li>
          <p>Taskname</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi
            quis urna elementum viverra.
          </span>
        </li>
        <li>
          <p>Taskname</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi
            quis urna elementum viverra.
          </span>
        </li>
        <li>
          <p>Taskname</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi
            quis urna elementum viverra.
          </span>
        </li>
      </ul>
    </StyledList>
  );
}

export default List;

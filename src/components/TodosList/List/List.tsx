import { StyledList } from "./styles";

interface IList {
  type: "todo" | "doing" | "done";
}

function List({ type }: IList) {
  return (
    <StyledList type={type}>
      <div className="typeTitle">
        <div className="circle"></div>
        <h2>
          {type === "todo" ? "Todo" : type === "doing" ? "Doing" : "Done"}
        </h2>
      </div>
      <ul>
        <li>
          <p>Taskname</p>
          <span>3/6 tasks done</span>
        </li>
        <li>
          <p>Taskname</p>
          <span>3/6 tasks done</span>
        </li>
        <li>
          <p>Taskname</p>
          <span>3/6 tasks done</span>
        </li>
        <li>
          <p>Taskname</p>
          <span>3/6 tasks done</span>
        </li>
      </ul>
    </StyledList>
  );
}

export default List;

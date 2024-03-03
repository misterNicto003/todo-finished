import React from "react";
import cls from "./todoItem.module.css"
import Card from "../Card/Card";
import { Delete, Edit } from "../../assets"

const TodoItem = (props) => {
  const {
    todo,
    deleteTodo,
    handleIsComplite,
    isCommpliteClassName,
    loadingClassName,
  } = props;
  return (
    <li
      className={`${cls.listItem} ${isCommpliteClassName}  ${loadingClassName} `}
    >
      <Card className={cls.todoItemCard}>
        <span
          style={{ background: todo.bg }}
          className={cls.todoItemColor}
        ></span>
        <p>{todo.text} </p>
        <div className="row">
          <img
            onClick={() => deleteTodo(todo.id)}
            src={Delete}
            className={`${cls.delete} ${!todo.isCommplite ? cls.deleteIconDisable : ""}`}
            alt=""
          />
          <img onClick={() => handleIsComplite(todo.id)} src={Edit} alt="" />
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;

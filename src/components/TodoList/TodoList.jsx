import React from "react";
import Card from "../Card/Card";
import TodoItem from "../TodoItem/TodoItem";
import cls from "./todoList.module.css";

const TodoList = (props) => {
  const {
    todos,
    deleteTodo,
    handleIsComplite,
    loading
  } = props;
  return (
    <div className={cls.list}>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              handleIsComplite={handleIsComplite}
              isCommpliteClassName={todo.isCommplite ? cls.itemComplite : ""}
              loadingClassName={loading ? "loading" : ""}
            />
          ))
        ) : (
          <Card className={cls.empty}>Задач пока нету</Card>
        )}
      </ul>
    </div>
  );
};

export default TodoList;

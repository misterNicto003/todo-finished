import React, { useState } from "react";

import cls from "./todo.module.css";
import TodoList from "../TodoList/TodoList";
import TodoColors from "../TodoColors/TodoColors";
import TodoHeader from "../TodoHeader/TodoHeader";

const colorsData = [
  " #FFCBDB",
  "#480607",
  "#9F8170",
  "#781F19",
  "#800000",
  "#B4674D",
  "#C3B091",
  "#00FF00",
  "#007FFF",
];

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState({
    color: "#FFCBDB",
    idx: 0,
  });

  const todoAll = todos.filter((item) => item);

  const todoActive = todos.filter((item) => !item.isCommplite);
  const todoFinished = todos.filter((item) => item.isCommplite);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    setLoading(true);

    const newItem = {
      id: todos.length + 1,
      text,
      isCommplite: false,
      bg: colors.color,
    };

    await new Promise((res) => {
      setTimeout(() => {
        res(setTodos([...todos, newItem]));
      }, 1000);
    });

    setText("");
    setLoading(false);
  };

  const deleteTodo = async (id) => {
    setLoading(true);

    await new Promise((res) => {
      setTimeout(() => {
        const newData = todos.filter((item) => item.id !== id);
        res(setTodos(newData));
      }, 1000);
    });

    setLoading(false);

    console.log(todos);
  };

  const handleIsComplite = async (id) => {
    setLoading(true);

    await new Promise((res) => {
      setTimeout(() => {
        const newData = todos.map((item) => {
          if (item.id === id) {
            return { ...item, isCommplite: !item.isCommplite };
          }

          return item;
        });
        res(setTodos(newData));
      }, 1000);
    });

    setLoading(false);
  };

  const AddColors = (item, index) => {
    setColors({
      color: item,
      idx: index,
    });
  };
  return (
    <div className={cls.todo}>
      <TodoHeader loading={loading} text={text} handleChange={handleChange} addTodo={addTodo} todoActive={todoActive} todoFinished={todoFinished} />
 

      <TodoColors
        loading={loading}
        colorsData={colorsData}
        idx={colors.idx}
        AddColors={AddColors}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        handleIsComplite={handleIsComplite}
        loading={loading}
      />
    </div>
  );
};

export default Todo;

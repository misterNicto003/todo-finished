import React from "react";
import cls from "./todoHeader.module.css";
import { Filter, Settings } from "../../assets";
import Spinner from "../Spinner/Spinner";

import Card from "../Card/Card";

const TodoHeader = (props) => {
    const {
        loading,
        text,
        handleChange,
        addTodo,
        todoActive,
        todoFinished
    }= props

  
  return (
    <Card className={`${loading ? "loading" : ""}`}>
      <div className={cls.form}>
        <div className="row">
          <input
            className={cls.input}
            value={text || ""}
            type="text"
            placeholder="Введите задачу..."
            onChange={handleChange}
          />
          <button disabled={!text} className={cls.button} onClick={addTodo}>
            Send
          </button>
        </div>
        <div className={`${cls.formResult} row `}>
          <div>
            <img src={Settings} alt="" />
            <span>активные:{todoActive.length}</span>
            {loading && (
              <div className={cls.spinner}>
                <Spinner />
              </div>
            )}
          </div>
          <div>
            <img src={Filter} alt="" />
            <span>Завершенные:{todoFinished.length}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TodoHeader;

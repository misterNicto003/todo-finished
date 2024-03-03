import React from "react";
import Card from "../Card/Card";
import cls from "./todoColors.module.css";

const TodoColors = (props) => {
  const { loading, colorsData, idx, AddColors } = props;
  return (
    <Card className={`row ${cls.colorList} ${loading ? "loading" : ""} `}>
      {colorsData.map((item, index) => (
        <div
          key={index}
          className={`${cls.color} ${index === idx ? cls.colorActive : " "}`}
          style={{ background: item }}
          onClick={() => AddColors(item, index)}
        ></div>
      ))}
    </Card>
  );
};

export default TodoColors;

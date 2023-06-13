"use client";
import { useState } from "react";

const List = () => {
  const 상품 = ["Tomatoes", "Pasta", "Coconut"];
  const array = [2, 3, 4];
  const [num, setNum] = useState([0, 0, 0]);
  const plusOne = () => {
    const copy = [...num];
    copy[0]++;
    setNum(copy);
  };
  const minusOne = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h2 className="title">Products</h2>
      {상품.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{상품[i]} $40</h4>
            <button onClick={minusOne}>-</button>
            <span> {num[0]} </span>
            <button onClick={plusOne}>+</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;

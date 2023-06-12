const List = () => {
  const 상품 = ["Tomatoes", "Pasta", "Coconut"];
  const array = [2, 3, 4];

  return (
    <div>
      <h2 className="title">Products</h2>
      {상품.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{상품[i]} $40</h4>
          </div>
        );
      })}
    </div>
  );
};

export default List;

import { age, ment, name } from "./data";

const Cart = () => {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h2 className="title">{ment}</h2>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
      <Banner content="삼성카드" />
      <RedButton color="red" />
      <RedButton color="blue" />
    </div>
  );
};

const RedButton = ({ color }) => {
  return <button style={{ background: color }}>빨간 버튼</button>;
};

const Banner = ({ content }) => {
  return <h5>{content} 결제 행사중</h5>;
};

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};

export default Cart;

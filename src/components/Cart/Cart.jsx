// Components
import Button from "../Button/Button";

// Icons
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Cart = ({ id, nama, gambar, harga, count, carts, setCarts }) => {
  return (
    <div className="cart-wrapper">
      <div className="image-wrapper">
        <img src={gambar} alt={nama} />
      </div>
      <div className="detail-wrapper">
        <div className="phone-detail">
          <h3>{nama}</h3>
          <p>
            {harga.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
          </p>
        </div>
        <div className="count-button">
          <Button onClick={(e) => {
            e.preventDefault();
            if (count > 1) {
              setCarts(carts.map((cart) => cart.id === id ? {...cart, count: cart.count - 1} : cart))
            } else {
              setCarts(carts.filter((cart) => cart.id !== id))
            }
          }}>
            <AiOutlineMinusCircle size={24} />
          </Button>
          <p>{count}</p>
          <Button onClick={() => setCarts(carts.map((cart) => cart.id === id ? {...cart, count: cart.count + 1} : cart))}>
            <AiOutlinePlusCircle size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

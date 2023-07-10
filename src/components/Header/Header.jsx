import { Link } from "react-router-dom";

// Header css
import Button from "../Button/Button";
import "./Header.css";

// Icons
import { SlScreenSmartphone } from "react-icons/sl";

const Header = ({countWish, countCart}) => {
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to={"/"} title="Back to Home">
            <SlScreenSmartphone /> Smartphone-Blog
          </Link>
        </h1>
      </div>
      <div className="navbar">
        <li>
          <Link to="/" title="Home">Home</Link>
        </li>
        <li>
          <Link to={"/about"} title="Wishlist">About</Link>
        </li>
        <li>
          <Link to={"/contact"} title="Keranjang">Contact</Link>
        </li>
        <Button>LOGIN</Button>
      </div>
    </header>
  );
};

export default Header;

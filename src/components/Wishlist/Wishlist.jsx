// Components
import Button from "../Button/Button";

// Icons
import { MdDelete, MdShoppingCartCheckout } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

const Wishlist = ({
  id,
  nama,
  gambar,
  harga,
  carts,
  setCarts,
  wishlists,
  setWishlists,
}) => {
  return (
    <div className="wishlist-wrapper">
      <div className="image-wrapper">
        <img src={gambar} alt={nama} />
      </div>
      <div className="detail-wrapper">
        <div className="phone-detail">
          <h3>{nama}</h3>
          <p>
            {harga.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
        <div className="count-button">
          <Button
            title="Hapus"
            onClick={() =>
              setWishlists(wishlists.filter((wishlist) => wishlist.id !== id))
            }
          >
            <MdDelete size={28} />
          </Button>
          <Button
            title="Keranjang"
            onClick={(e) => {
              e.preventDefault();
              if (carts.find((c) => c.id === id)) {
                setCarts(
                  carts.map((c) =>
                    c.id === id ? { ...c, count: c.count + 1 } : c
                  )
                );
              } else {
                setCarts([...carts, { ...product, count: 1 }]);
              }
            }}
          >
            <MdShoppingCartCheckout size={28} />
          </Button>
          <Button title="Beli">
            <IoBagCheckOutline size={30} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

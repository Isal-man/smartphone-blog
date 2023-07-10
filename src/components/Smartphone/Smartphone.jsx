import { useRef, useState } from "react";

// Components
import Button from "../Button/Button";

// Primereact components
import { Toast } from "primereact/toast";

// Smartphone css
import "./Smartphone.css";

// icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";

const Smartphone = ({
  id,
  nama,
  gambar,
  harga,
  wishlist,
  carts,
  setCarts,
  wishlists,
  setWishlists,
}) => {
  const toast = useRef(null);

  const product = {
    id,
    nama,
    gambar,
    harga,
  };

  const showSuccess = (msg) => {
    toast.current.show({
      severity: "success",
      detail: msg,
      life: 3000,
    });
  };

  const showError = (msg) => {
    toast.current.show({
      severity: "error",
      detail: msg,
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="card smartphone-wrapper">
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
          <div className="btn-wrapper">
            <Button
              onClick={(e) => {
                e.preventDefault();
                if (wishlists.find()) {
                  setWishlists(wishlists.map((w) => w.id === id && {...product, wishlist: false}));
                } else {
                  setWishlists([...wishlists, { ...product, wishlist: true }]);
                }
                console.log(wishlists)
                {
                  wishlist
                    ? showError("Wishlist dibatalkan")
                    : showSuccess("Wishlist ditambahkan");
                }
              }}
              title={"Wishlist"}
            >
              {wishlist ? (
                <AiFillHeart color="red" size={32} />
              ) : (
                <AiOutlineHeart size={32} />
              )}
            </Button>
            <Button
              title={"Keranjang"}
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
            <Button title={"Beli"}>
              <IoBagCheckOutline size={30} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smartphone;

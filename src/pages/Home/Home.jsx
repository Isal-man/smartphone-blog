import { useState } from "react";

// Components
import { Button, Cart, Dialog, Smartphone, Wishlist } from "../../components";

// CSS
import "./Home.css";

// Icons
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineCloseCircle,
  AiFillHeart,
} from "react-icons/ai";
import { RiAddCircleLine, RiShoppingCart2Line } from "react-icons/ri";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      nama: "Samsung Galaxy 21 FE",
      gambar: "/Samsung-Galaxy-21-FE.jpg",
      harga: 7499000,
      deskripsi:
        "Samsung Galaxy S21 FE adalah smartphone canggih dengan layar AMOLED 6,5 inci yang menakjubkan dan kamera berkualitas tinggi. Ditenagai oleh prosesor kuat, smartphone ini menawarkan performa yang mulus dan daya tahan baterai yang luar biasa. Desainnya yang elegan dengan bodi yang tipis dan ringan membuatnya nyaman digunakan. Fitur-fitur seperti pemindai sidik jari dalam layar dan dukungan 5G membuatnya menjadi pilihan yang sempurna untuk penggunaan sehari-hari.",
      wishlist: false,
    },
    {
      id: 2,
      nama: "Samsung Galaxy Note20 Ultra",
      gambar: "/samsung-galaxy-note20-ultra-.jpg",
      harga: 9290000,
      deskripsi:
        "Samsung Galaxy Note20 Ultra adalah ponsel pintar yang luar biasa dengan layar Dynamic AMOLED 6,9 inci yang besar dan indah. Dilengkapi dengan S Pen yang ditingkatkan, ponsel ini cocok untuk produktivitas dan kreativitas. Kamera berkualitas tinggi, performa super cepat, dan baterai tahan lama membuatnya menjadi perangkat terbaik untuk kebutuhan sehari-hari dan hiburan.",
      wishlist: false,
    },
    {
      id: 3,
      nama: "Samsung Galaxy A52",
      gambar: "/Samsung-Galaxy-A52.jpg",
      harga: 4700000,
      deskripsi:
        "Samsung Galaxy A52 Ultra adalah smartphone yang mengesankan dengan layar Super AMOLED 6,7 inci yang memukau. Dilengkapi dengan kamera yang sangat baik, performa yang tangguh, dan baterai daya tahan, ini adalah pilihan sempurna untuk penggunaan sehari-hari dan hiburan yang maksimal.",
      wishlist: false,
    },
    {
      id: 4,
      nama: "Samsung Galaxy M51",
      gambar: "/samsung-galaxy-m51.jpg",
      harga: 5500000,
      deskripsi:
        "Samsung Galaxy M51 adalah ponsel hebat dengan layar Super AMOLED 6,7 inci yang besar dan jernih. Ditenagai oleh baterai raksasa 7.000mAh, ini menawarkan daya tahan yang luar biasa. Dilengkapi dengan kamera kuat dan performa yang handal, ponsel ini ideal untuk produktivitas dan hiburan sepanjang hari.",
      wishlist: false,
    },
    {
      id: 5,
      nama: "Samsung Galaxy Z Fold2",
      gambar: "/samsung-galaxy-z-fold2.jpg",
      harga: 33888000,
      deskripsi:
        "Samsung Galaxy Z Fold2 adalah smartphone revolusioner dengan layar lipat yang inovatif. Dengan desain yang elegan, layar utama AMOLED 7,6 inci yang besar, dan layar luar yang praktis, ini adalah kombinasi sempurna antara ponsel dan tablet. Fitur-fitur canggih dan performa yang tinggi membuatnya menjadi perangkat yang luar biasa untuk produktivitas dan hiburan.",
      wishlist: false,
    },
    {
      id: 6,
      nama: "iPhone 13 Pro Max",
      gambar: "/iphone-13-pro-max.jpg",
      harga: 19999000,
      deskripsi:
        "Samsung Galaxy S21 FE adalah smartphone canggih dengan layar AMOLED 6,5 inci yang menakjubkan dan kamera berkualitas tinggi. Ditenagai oleh prosesor kuat, smartphone ini menawarkan performa yang mulus dan daya tahan baterai yang luar biasa. Desainnya yang elegan dengan bodi yang tipis dan ringan membuatnya nyaman digunakan. Fitur-fitur seperti pemindai sidik jari dalam layar dan dukungan 5G membuatnya menjadi pilihan yang sempurna untuk penggunaan sehari-hari.",
      wishlist: false,
    },
    {
      id: 7,
      nama: "iPhone 12 Pro",
      gambar: "/iphone-12-pro.jpg",
      harga: 18499000,
      deskripsi:
        "iPhone 12 Pro adalah perangkat terdepan dari Apple dengan desain yang elegan dan kualitas tahan lama. Dilengkapi dengan layar Super Retina XDR 6,1 inci yang cerah dan tajam, sistem kamera Pro yang canggih, serta kemampuan 5G, iPhone 12 Pro memberikan pengalaman terbaik bagi pengguna yang menginginkan performa tinggi dan fitur-fitur inovatif.",
      wishlist: false,
    },
    {
      id: 8,
      nama: "iPhone SE 2020",
      gambar: "/iphone-se-2020.jpg",
      harga: 6150000,
      deskripsi:
        "iPhone SE 2020 adalah smartphone pintar yang kuat dengan desain yang familiar. Dilengkapi dengan layar Retina 4,7 inci yang jernih, chip A13 Bionic yang cepat, dan kamera 12 MP yang menghasilkan foto dan video berkualitas tinggi, iPhone SE 2020 adalah pilihan yang sempurna untuk pengguna yang mencari perangkat yang handal dengan harga yang terjangkau.",
      wishlist: false,
    },
    {
      id: 9,
      nama: "iPhone 11",
      gambar: "/iphone-11.jpg",
      harga: 6840000,
      deskripsi:
        "iPhone 11 adalah smartphone yang populer dengan fitur-fitur canggih dari Apple. Dilengkapi dengan layar Liquid Retina 6,1 inci yang cerah, sistem kamera ganda yang menghasilkan foto berkualitas tinggi, dan kinerja yang tangguh berkat chip A13 Bionic, iPhone 11 memberikan pengalaman yang memuaskan bagi pengguna yang menginginkan perangkat yang handal dan inovatif.",
      wishlist: false,
    },
    {
      id: 10,
      nama: "iPhone XR",
      gambar: "/iphone-xr.jpg",
      harga: 15500000,
      deskripsi:
        "iPhone XR adalah smartphone yang menarik perhatian dengan desain yang stylish dan warna-warna yang cerah. Dilengkapi dengan layar Liquid Retina 6,1 inci yang luas, kamera single yang menghasilkan foto berkualitas tinggi, dan chip A12 Bionic yang kuat, iPhone XR memberikan pengalaman yang menyenangkan bagi pengguna yang menginginkan perangkat yang tangguh dengan harga yang lebih terjangkau.",
      wishlist: false,
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(2);
  const [newSmartphone, setNewSmartphone] = useState();
  const [incrementID, setIncrementID] = useState(products.length + 1);
  const [carts, setCarts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [wishlists, setWishlists] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const filteredAndSorteredProducts = products
    .toSorted((a, b) => {
      if (sortOrder === "asc") return a[sortBy] < b[sortBy] ? -1 : 1;
      else return a[sortBy] > b[sortBy] ? -1 : 1;
    })
    .filter(
      (product) =>
        product.harga >= minPrice &&
        product.harga <= maxPrice &&
        product.nama.toLowerCase().includes(keyword)
    );

  return (
    <>
      <header>
        <label>
          Search:
          <input
            type="text"
            onChange={(e) => {
              setCurrentPage(1);
              setKeyword(e.target.value.toLowerCase());
            }}
          />
        </label>
        <section>
          Harga:
          <label>
            Minimal:
            <input
              type="number"
              onChange={(e) => {
                setCurrentPage(1);
                setMinPrice(e.target.value);
              }}
            />
          </label>
          <label>
            Maksimal:
            <input
              type="number"
              onChange={(e) => {
                setCurrentPage(1);
                setMaxPrice(e.target.value || Infinity);
              }}
            />
          </label>
        </section>
        <section>
          Urutkan:
          <select
            value={sortBy}
            onChange={(e) => {
              setCurrentPage(1);
              setSortBy(e.target.value);
            }}
          >
            <option value="id">Normal</option>
            <option value="nama">Nama</option>
            <option value="harga">Harga</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => {
              setCurrentPage(1);
              setSortOrder(e.target.value);
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </section>
        <Button
          onClick={() => {
            setNewSmartphone({ id: incrementID });
          }}
          className={"btn-tambah"}
        >
          <RiAddCircleLine size={25} /> Tambah
        </Button>
        <Button className={"btn-keranjang"} onClick={() => setShowCart(true)}>
          <RiShoppingCart2Line size={25} /> Keranjang{" "}
          {carts.length > 0 && <p>{carts.reduce((a, s) => a + s.count, 0)}</p>}
        </Button>
        <Button
          className={"btn-wishlist"}
          onClick={() => setShowWishlist(true)}
        >
          <AiFillHeart size={24} color="red" /> Wishlist
        </Button>
      </header>
      <main>
        {filteredAndSorteredProducts
          .filter(
            (_product, i) =>
              i < pageLimit * currentPage &&
              i >= pageLimit * currentPage - pageLimit
          )
          .map((product) => (
            <Smartphone
              key={product.id}
              {...product}
              products={products}
              carts={carts}
              setCarts={setCarts}
              wishlists={wishlists}
              setWishlists={setWishlists}
            />
          ))}
      </main>
      <footer>
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <AiOutlineDoubleLeft />
        </Button>
        {filteredAndSorteredProducts
          .filter((_product, i) => i % pageLimit === 0)
          .map((_product, i) => (
            <Button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              disabled={i + 1 === currentPage}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            currentPage ===
            Math.ceil(filteredAndSorteredProducts.length / pageLimit)
          }
        >
          <AiOutlineDoubleRight />
        </Button>
        <select
          value={pageLimit}
          onChange={(e) => {
            setCurrentPage(1);
            setPageLimit(e.target.value);
          }}
        >
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </footer>
      {newSmartphone && (
        <Dialog className={"add"}>
          <h1>Tambah Data</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setProducts([...products, {...newSmartphone, wishlist: false}]);
              setNewSmartphone();
              setIncrementID(incrementID + 1);
            }}
          >
            <label>
              ID:
              <input type="text" value={newSmartphone.id} readOnly />
            </label>
            <label>
              Nama:
              <input
                type="text"
                onChange={(e) =>
                  setNewSmartphone({ ...newSmartphone, nama: e.target.value })
                }
              />
            </label>
            <label>
              Harga:
              <input
                type="number"
                onChange={(e) =>
                  setNewSmartphone({
                    ...newSmartphone,
                    harga: parseInt(e.target.value),
                  })
                }
              />
            </label>
            <label>
              Deskripsi:
              <textarea
                onChange={(e) =>
                  setNewSmartphone({
                    ...newSmartphone,
                    deskripsi: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Gambar:
              <input
                type="url"
                onChange={(e) =>
                  setNewSmartphone({
                    ...newSmartphone,
                    gambar: e.target.value,
                  })
                }
              />
              <small>Note: inputan gambar harus merupakan sebuah url</small>
            </label>
            <div className="button-wrapper">
              <Button type={"reset"} onClick={() => setNewSmartphone()}>
                Cancel
              </Button>
              <Button>Save</Button>
            </div>
          </form>
        </Dialog>
      )}
      {showCart && (
        <Dialog className={"cart"}>
          <h1>
            Keranjang
            <Button onClick={() => setShowCart(false)}>
              <AiOutlineCloseCircle size={32} />
            </Button>
          </h1>
          {carts.length > 0
            ? carts.map((c) => (
                <Cart
                  key={c.id}
                  {...c}
                  carts={carts}
                  setCarts={setCarts}
                  setShowCart={setShowCart}
                />
              ))
            : "Keranjang masih kosong"}
          <p>
            Jumlah yang harus dibayarkan:{" "}
            {carts
              .reduce((a, b) => a + b.harga * b.count, 0)
              .toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
          </p>
        </Dialog>
      )}
      {showWishlist && (
        <Dialog className="wishlist">
          <h1>
            Wishlist
            <Button onClick={() => setShowWishlist(false)}>
              <AiOutlineCloseCircle size={32} />
            </Button>
          </h1>
          {wishlists.length > 0
            ? wishlists.map((wishlist) => (
                <Wishlist
                  key={wishlist.id}
                  {...wishlist}
                  carts={carts}
                  setCarts={setCarts}
                  wishlists={wishlists}
                  setWishlists={setWishlists}
                />
              ))
            : "Wishlist masih kosong"}
        </Dialog>
      )}
    </>
  );
};

export default Home;

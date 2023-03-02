import React, { useState } from "react";
import SideBar from "../Sidebar/Sidebar";
import "./Restaurent.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "react-bootstrap";
function Restaurent() {
  const [cart, setcart] = useState(0);
  let menu = [
    {
      name: "Idli",
      img: "https://www.nicepng.com/png/detail/853-8530788_idli-vada-big.png",
      des: "lorem ipsum dolor sit amet",
      price: "50",
    },
    {
      name: "Dosa",
      img: "https://www.kindpng.com/picc/m/333-3336187_dosa-hd-images-free-download-hd-png-download.png",
      des: "lorem ipsum dolor sit amet",
      price: "80",
    },
    {
      name: "Puri",
      img: "https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/shutterstock_1405286438.jpg",
      des: "lorem ipsum dolor sit amet",
      price: "60",
    },
    {
      name: "Chappathi",
      img: "https://www.kindpng.com/picc/m/96-965312_chapati-hd-png-transparent-png.png",
      des: "lorem ipsum dolor sit amet",
      price: "60",
    },
    {
      name: "Meals",
      img: "https://i.pinimg.com/originals/6b/3b/6a/6b3b6a6468763725fb1f2672d63bb03a.png",
      des: "lorem ipsum dolor sit amet",
      price: "150",
    },
    {
      name: "Briyani",
      img: "https://namastedesi.in/wp-content/uploads/2022/09/4.png",
      des: "lorem ipsum dolor sit amet",
      price: "250",
    },
    {
      name: "Pizza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aTLEB2vttLNUWv1WZGkiygIXWAUyvFIrQQ&usqp=CAU",
      des: "lorem ipsum dolor sit amet",
      price: "250",
    },
    {
      name: "Parotta",
      img: "https://hotelnewsaravanabhavan.github.io/home/par.png",
      des: "lorem ipsum dolor sit amet",
      price: "250",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-2 p-0">
            <SideBar />
          </div>
          <div className="col-lg-10 res-con">
            <div className=" menu-res ">
              <div>
                <h3 className="title-res">Restaurant</h3>
              </div>

              <div>
                <h5 className="me-5">
                  <AiOutlineShoppingCart />
                  <Badge bg="light" text="dark">
                    {cart}
                  </Badge>
                </h5>
              </div>
            </div>

            <div className="row gy-5 ps-3">
              {menu.map((e) => {
                return (
                  <>
                    <div className="col-lg-3 menu-item mb-3 ">
                      <img src={e.img} className="menu-img img-fluid" alt="" />

                      <h4 className="mt-2">{e.name}</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <div className="menu-p">
                        <p className="price"> ₹ {e.price}</p>
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => setcart(cart + 1)}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurent;

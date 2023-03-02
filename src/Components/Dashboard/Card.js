import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaCalendarCheck, FaHotel, FaRegCalendarMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loadingdot from "../Spinner/Loadingdot";

function Card() {
  const [reserve, setreserve] = useState([]);
  const [booking, setbooking] = useState([]);
  const [room, setroom] = useState([]);
  const [available, setAvailable] = useState([]);
  const [pending, setPending] = useState(false);

  let fetchAll = async () => {
    try {
      setPending(true);
      let roomData = await axios.get("https://api-digi.onrender.com/rooms", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });
      let availableData = await axios.get(
        "https://api-digi.onrender.com/roomsavailable"
      );

      // let checkin = await axios.get(
      //   "https://api-digi.onrender.com/bookings"
      // );
      let booking = await axios.get("https://api-digi.onrender.com/bookings", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });

      let reserve = await axios.get(
        "https://api-digi.onrender.com/reservelist"
      );
      setroom(roomData.data);
      setAvailable(availableData.data);
      setbooking(booking.data);
      setreserve(reserve.data);
      setPending(false);
    } catch (error) {
      setPending(false);
      alert("card data error: " + error);
    }
  };
  useEffect(() => {
    fetchAll();
  }, []);

  let cardData = [
    {
      cardName: "Total Rooms",
      value: room.length,
      icon: <FaHotel />,
      color: "primary",
      link: "/frontdesk/roomlist",
    },
    {
      cardName: "Available Rooms",
      value: available.length,
      icon: <MdOutlineBedroomParent />,
      color: "success",
      link: "/frontdesk/booking",
    },
    {
      cardName: "Reserved Rooms",
      value: reserve.length,
      icon: <FaRegCalendarMinus />,
      color: "info",
      link: "/frontdesk/reservelist",
    },
    {
      cardName: "Occupied Rooms",
      value: booking.length,
      icon: <FaCalendarCheck />,
      color: "danger",
      link: "/frontdesk/checkedin",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        {cardData.map((e, i) => {
          return (
            <div className="col-lg-3  col-md-6 col-sm-6 mt-3 " key={i}>
              <Link to={`${e.link}`}>
                <div className="card-con">
                  <div className={`card-icon text-${e.color}`}>{e.icon}</div>
                  <div key={i}>
                    <h5 className={`card-title  text-${e.color} `}>
                      {e.cardName}
                    </h5>
                    <h5 className={`card-data  text-${e.color}`}>
                      {pending ? <Loadingdot /> : e.value}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;

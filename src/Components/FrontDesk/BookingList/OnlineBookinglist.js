import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../../Sidebar/Sidebar";
import swal from "sweetalert";
import "./BookingList.css";
import Spinner from "../../Spinner/Spinner";
import TableReserveView from "./TableBookingList";
import TableOnlineBooking from "./TableOnlineBooking";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function OnlineBookinglist() {
  const [loading, setloading] = useState(false);
  const [booking1, setbooking1] = useState([]);
  const [room, setRoom] = useState({});
  const [view1, setview1] = useState({});
  const [Search, setSearch] = useState("");
  const [roomid, setroomid] = useState({});
  const fetchAll = async () => {
    try {
      setloading(true);
      let bookingData = await axios.get(
        "https://api-digi.onrender.com/bookings",
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setbooking1(bookingData.data);
      let roomData = await axios.get("https://api-digi.onrender.com/rooms", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });
      setRoom(roomData.data);
      setloading(false);
    } catch (err) {
      console.log("error booking view");
    }
  };

  // view table data
  let handleView = async (id) => {
    try {
      let viewData = await axios.get(
        `https://api-digi.onrender.com/booking/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setview1(viewData.data);
    } catch (err) {
      alert("booking View Error");
    }
  };
  // let handleDelete = async (id, roomno) => {
  //   let roomfind = await axios.get(
  //     `https://api-digi.onrender.com/roomsfind?roomnumber=${roomno}`
  //   );
  //   await setroomid(roomfind.data);

  //   let roomidno = roomid[0]._id;
  //   console.log(roomidno);
  //   const status2 = { bookingstatus: false };
  //   await axios.put(
  //     `https://api-digi.onrender.com/roomsedit/${roomidno}`,
  //     status2,
  //     {
  //       headers: {
  //         Authorization: window.localStorage.getItem("myapptoken"),
  //       },
  //     }
  //   );

  //   // fetchAll();
  // };

  // delete table data
  let handleDelete = async (id, roomno) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      let roomfind = await axios.get(
        `https://api-digi.onrender.com/roomsfind?roomnumber=${roomno}`
      );
      setroomid(roomfind.data);
      let roomidno = await roomid[0]._id;
      if (willDelete) {
        axios.delete(
          `https://api-digi.onrender.com/booking/${id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          },

          swal(" Booking has been deleted!", {
            icon: "success",
            timer: 2000,
          })
        );

        const status2 = { bookingstatus: false };
        await axios.put(
          `https://api-digi.onrender.com/roomsedit/${roomidno}`,
          status2,
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );

        fetchAll();
      } else {
        setloading(false);
      }
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <div className="row  ">
          <div className="col-lg-2 p-0 ">
            <SideBar />
          </div>
          <div className="col-lg-10">
            <div className=" b-title">
              <span>
                <h3>Online Booking Details</h3>
              </span>
              {booking1.length === 0 ? null : (
                <>
                  {!loading && (
                    <span>
                      <input
                        type="date"
                        min="2021-01-01"
                        className="form-control-se"
                        placeholder="search"
                        onChange={(event) => {
                          setSearch(event.target.value);
                        }}
                      />
                    </span>
                  )}
                </>
              )}
            </div>
            <hr />
            <div className="nav-menu py-2 ps-4">
              <Link to="/frontdesk">FrontDesk</Link>
              <FaAngleRight className="sidebar-arrow" />
              <Link to="/frontdesk/onlinebookinglist">Online Booking List</Link>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <TableOnlineBooking
                booking1={booking1}
                room={room}
                Search={Search}
                view1={view1}
                handleView={handleView}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineBookinglist;

import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../../Sidebar/Sidebar";
import swal from "sweetalert";
import "./BookingList.css";
import Spinner from "../../Spinner/Spinner";
import TableReserveView from "./TableBookingList";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useFormik } from "formik";

function Bookinglist() {
  const [loading, setloading] = useState(false);
  const [loadingOut, setOutloading] = useState(false);
  const [loadingView, setViewloading] = useState(false);
  const [edit, setedit] = useState(false);
  const [booking, setbooking] = useState([]);
  const [room, setRoom] = useState([]);
  const [data, setData] = useState([]);
  const [viewD, setViewD] = useState([]);
  const [Search, setSearch] = useState("");
  const [currentroom, setcurrentroom] = useState("");
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
      setbooking(bookingData.data);
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
  let handleout = async (id) => {
    setOutloading(true);
    try {
      let viewData = await axios.get(
        `https://api-digi.onrender.com/booking/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setData(viewData.data);
      setOutloading(false);
    } catch (err) {
      console.log("booking View Error");
    }
  };
  // view table data
  let handleView = async (id) => {
    setViewloading(true);
    try {
      let viewData = await axios.get(
        `https://api-digi.onrender.com/booking/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setViewD(viewData.data);
      setViewloading(false);
    } catch (err) {
      console.log("booking View Error");
    }
  };
  let formik = useFormik({
    initialValues: {
      Extrabed: 0,
      Laundry: 0,
      Restaurant: 0,
      Others: 0,
      roomno: "",
      roomid: "",
      type: "",
      price: "",
      ac: "",
      bed: "",
      bookingno: "",
      reserveno: "",
      mode: "",
      meal: "",
      advance: "",
      adult: "",
      child: "",
      checkin: "",
      checkout: "",
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      idtype: "",
      idno: "",
      idfile: "",
      address: "",
      note: "",
      bookingstatus: "",
      reservestatus: "",
      status: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          swal(" Booking Updated", {
            icon: "success",
            timer: 2000,
          });
          await axios.put(
            `https://api-digi.onrender.com/bookingedit/${currentroom}`,
            values,
            {
              headers: {
                Authorization: window.localStorage.getItem("myapptoken"),
              },
            }
          );

          fetchAll();
        } else {
          await axios.post("https://api-digi.onrender.com/booking", values, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          });
          fetchAll();
        }
      } catch (error) {
        console.log("Something went wrong booking edit");
      }
    },
  });
  let handleEdit = async (id) => {
    setViewloading(true);
    try {
      let edit = await axios.get(
        `https://api-digi.onrender.com/booking/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );

      formik.setValues({
        roomno: edit.data.roomno,
        roomid: edit.data.roomid,
        type: edit.data.type,
        price: edit.data.price,
        ac: edit.data.ac,
        bed: edit.data.bed,
        bookingno: edit.data.bookingno,
        reserveno: edit.data.reserveno,
        mode: edit.data.mode,
        meal: edit.data.meal,
        advance: edit.data.advance,
        adult: edit.data.adult,
        child: edit.data.child,
        checkin: edit.data.checkin,
        checkout: edit.data.checkout,
        firstname: edit.data.firstname,
        lastname: edit.data.lastname,
        email: edit.data.email,
        gender: edit.data.gender,
        contact: edit.data.contact,
        idtype: edit.data.idtype,
        idno: edit.data.idno,
        idfile: edit.data.idfile,
        address: edit.data.address,
        note: edit.data.note,
        bookingstatus: edit.data.bookingstatus,
        reservestatus: edit.data.reservestatus,
        status: edit.data.status,
        Extrabed: edit.data.Extrabed,
        Laundry: edit.data.Laundry,
        Restaurant: edit.data.Restaurant,
        Others: edit.data.Others,
      });

      setcurrentroom(edit.data._id);
      setedit(true);
      setViewloading(false);
    } catch (error) {
      console.log("Something went wrong Rooms Edit");
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
  // let handleDelete = async (id, roomno) => {
  //   swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, you will not be able to recover!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then(async (willDelete) => {
  //     let roomfind = await axios.get(
  //       `https://api-digi.onrender.com/roomsfind?roomnumber=${roomno}`
  //     );
  //     setroomid(roomfind.data);
  //     let roomidno = await roomid[0]._id;
  //     if (willDelete) {
  //       axios.delete(
  //         `https://api-digi.onrender.com/booking/${id}`,
  //         {
  //           headers: {
  //             Authorization: window.localStorage.getItem("myapptoken"),
  //           },
  //         },

  //         swal(" Booking has been deleted!", {
  //           icon: "success",
  //           timer: 2000,
  //         })
  //       );

  //       const status2 = { bookingstatus: false };
  //       await axios.put(
  //         `https://api-digi.onrender.com/roomsedit/${roomidno}`,
  //         status2,
  //         {
  //           headers: {
  //             Authorization: window.localStorage.getItem("myapptoken"),
  //           },
  //         }
  //       );

  //       fetchAll();
  //     } else {
  //       setloading(false);
  //     }
  //   });
  // };

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
            <div className="b-title">
              <span>
                <h3 className="c-title">Occupied Details</h3>
              </span>

              {booking.length === 0 ? null : (
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
              <FaAngleRight Name="sidebar-arrow" />
              <Link to="/frontdesk/bookinglist">Occupied List</Link>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <TableReserveView
                booking={booking}
                Search={Search}
                handleout={handleout}
                data={data}
                loadingOut={loadingOut}
                loadingView={loadingView}
                handleView={handleView}
                viewD={viewD}
                handleEdit={handleEdit}
                formik={formik}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookinglist;

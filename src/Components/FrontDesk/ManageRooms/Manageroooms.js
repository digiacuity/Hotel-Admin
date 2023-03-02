import SideBar from "../../Sidebar/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import swal from "sweetalert";
import "./Manageroom.css";
import Spinner from "../../Spinner/Spinner";
import TableManage from "./TableManage";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function Manageroooms() {
  const [view, setview] = useState([]);
  const [rooms, setrooms] = useState([]);
  const [booking, setBooking] = useState([]);
  const [edit, setedit] = useState(false);
  const [load, setload] = useState(false);
  const [loading, setloading] = useState(false);
  const [currentroom, setcurrentroom] = useState("");
  const [Search2, setSearch2] = useState("");

  async function fetchAll() {
    setloading(true);
    try {
      let roomData = await axios.get("https://api-digi.onrender.com/rooms", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });

      setrooms(roomData.data);

      let bookingData = await axios.get(
        "https://api-digi.onrender.com/reservelist",
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setloading(false);
      setBooking(bookingData.data);
    } catch (error) {}
  }
  let formik = useFormik({
    initialValues: {
      bookingno: "",
      roomno: "",
      type: "",
      status: "",
      advance: "",
      noofguest: "",
      checkin: "",
      checkout: "",
      name: "",
      email: "",
      gender: "",
      contact: "",
      idtype: "",
      idno: "",
      address: "",
      note: "",
      remark: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          await axios.put(
            `https://api-digi.onrender.com/bookingedit/${currentroom}`,
            values,
            {
              headers: {
                Authorization: window.localStorage.getItem("myapptoken"),
              },
            }
          );

          swal(" Room Details Updated", {
            icon: "success",
            timer: 2000,
          });
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
        alert("Something went wrong");
      }
    },
  });

  let handleEdit = async (id) => {
    setload(true);
    try {
      let roomedit = await axios.get(
        `https://api-digi.onrender.com/reservelist/${id}`
      );
      formik.setValues({
        bookingno: roomedit.data.bookingno,
        roomno: roomedit.data.roomnumber,
        newroomno: roomedit.data.newroomno,
        type: roomedit.data.type,
        newtype: roomedit.data.newtype,
        status: roomedit.data.status,
        advance: roomedit.data.advance,
        noofguest: roomedit.data.noofguest,
        checkin: roomedit.data.checkin,
        checkout: roomedit.data.checkout,
        name: roomedit.data.name,
        email: roomedit.data.email,
        gender: roomedit.data.gender,
        contact: roomedit.data.contact,
        idtype: roomedit.data.idtype,
        price: roomedit.data.price,
        idno: roomedit.data.idno,
        address: roomedit.data.address,
        note: roomedit.data.note,
      });
      setcurrentroom(roomedit.data._id);
      setedit(true);
      setload(false);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  let handleView = async (id) => {
    setload(true);
    try {
      let view = await axios.get(
        `https://api-digi.onrender.com/reserveview/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );

      setview(view.data);
      setload(false);
    } catch (err) {}
  };

  let handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://api-digi.onrender.com/booking/${id}`, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          })
          .then(() => {
            fetchAll();
          });

        swal(" Rooms has been deleted!", {
          icon: "success",
          timer: 3000,
        });
      } else {
      }
    });
  };

  // let handleCheckin = async (id) => {
  //   try {
  //     let view1 = await axios.get(
  //       `https://api-digi.onrender.com/booking/${id}`,
  //       {
  //         headers: {
  //           Authorization: window.localStorage.getItem("myapptoken"),
  //         },
  //       }
  //     );
  //     setview(view1.data);
  //   } catch (err) {}
  // };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 p-0">
            <SideBar />
          </div>

          <div className="col-lg-10  ">
            <div className="mr-title ">
              <span>
                <h3 className="mr-title2 ">Manage Rooms</h3>
              </span>
              <span>
                {!loading && (
                  <input
                    type="text"
                    className="form-control-se "
                    placeholder="search"
                    onChange={(event) => {
                      setSearch2(event.target.value);
                    }}
                  />
                )}
              </span>
            </div>
            <hr />
            <div className="nav-menu py-2 ps-4">
              <Link to="/frontdesk">FrontDesk</Link>
              <FaAngleRight className="sidebar-arrow" />
              <Link to="/frontdesk/manageroom">Manage Room </Link>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <TableManage
                booking={booking}
                Search2={Search2}
                handleEdit={handleEdit}
                formik={formik}
                // handleCheckin={handleCheckin}
                view={view}
                load={load}
                handleView={handleView}
                rooms={rooms}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manageroooms;

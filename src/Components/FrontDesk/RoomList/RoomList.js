import SideBar from "../../Sidebar/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import TableRoom from "./TableRoom";
import "./RoomList.css";
import { FaAngleRight } from "react-icons/fa";
function RoomList() {
  const [view, setview] = useState({});
  const [rooms, setrooms] = useState([]);
  const [edit, setedit] = useState(false);
  const [loading, setloading] = useState(false);
  const [viewloading, setviewloading] = useState(false);
  const [currentroom, setcurrentroom] = useState("");

  async function fetchAll() {
    setloading(true);
    try {
      let RoomData = await axios.get("https://api-digi.onrender.com/rooms", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });

      setloading(false);
      setrooms(RoomData.data);
    } catch (error) {}
  }

  let formik = useFormik({
    initialValues: {
      roomnumber: "",
      roomtype: "",
      ac: "",
      bed: "",
      price: "",
      roomstatus: "",
      floor: "",
      bookingstatus: false,
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          swal(" Room Updated", {
            icon: "success",
            timer: 2000,
          });
          await axios.put(
            `https://api-digi.onrender.com/roomsedit/${currentroom}`,
            values,
            {
              headers: {
                Authorization: window.localStorage.getItem("myapptoken"),
              },
            }
          );

          fetchAll();
        } else {
          await axios.post("https://api-digi.onrender.com/room", values, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          });
          fetchAll();
        }
      } catch (error) {
        console.log("Something went wrong room add");
      }
    },
  });

  let handleEdit = async (id) => {
    setviewloading(true);
    try {
      let roomedit = await axios.get(
        `https://api-digi.onrender.com/roomsview/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      formik.setValues({
        roomnumber: roomedit.data.roomnumber,
        roomtype: roomedit.data.roomtype,
        ac: roomedit.data.ac,
        bed: roomedit.data.bed,
        price: roomedit.data.price,
        roomstatus: roomedit.data.roomstatus,
        bookingstatus: roomedit.data.bookingstatus,
        floor: roomedit.data.floor,
      });

      setcurrentroom(roomedit.data._id);
      setedit(true);
      setviewloading(false);
    } catch (error) {
      console.log("Something went wrong Rooms Edit");
    }
  };

  let handleView = async (id) => {
    setviewloading(true);
    try {
      let view = await axios.get(
        `https://api-digi.onrender.com/roomsview/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );

      setview(view.data);
      setviewloading(false);
    } catch (err) {
      console.log("Something went wrong Room View");
    }
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
          .delete(`https://api-digi.onrender.com/rooms/${id}`, {
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
          <div className="col-lg-10">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="ro-title">Room Details</h3>

              <div>
                {loading ? null : (
                  <button className="btn  btn-add mt-2">
                    <Link to="/addrooms" className="btn-add">
                      Add Room
                    </Link>
                  </button>
                )}
              </div>
            </div>

            <hr />
            <div className="nav-menu py-2 ps-4">
              <Link to="/frontdesk">FrontDesk</Link>
              <FaAngleRight className="sidebar-arrow" />
              <Link to="/frontdesk/roomlist">Room List</Link>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <TableRoom
                view={view}
                rooms={rooms}
                formik={formik}
                handleView={handleView}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                viewloading={viewloading}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomList;

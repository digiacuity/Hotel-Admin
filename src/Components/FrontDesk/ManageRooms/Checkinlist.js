import SideBar from "../../Sidebar/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import swal from "sweetalert";
import "./Manageroom.css";
import Spinner from "../../Spinner/Spinner";
import Tablelist from "./Tablelist";

function Checkinlist() {
  const [booking, setBooking] = useState([]);
  const [edit, setedit] = useState(false);
  const [loading, setloading] = useState(false);
  const [currentroom, setcurrentroom] = useState("");

  async function fetchAll() {
    try {
      setloading(true);
      let bookingData = await axios.get(
        "https://api-digi.onrender.com/bookings"
      );

      setBooking(bookingData.data);
      setloading(false);
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
          fetchAll();
          swal(" Room Details Updated", {
            icon: "success",
            timer: 2000,
          });
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
    try {
      let roomedit = await axios.get(
        `https://api-digi.onrender.com/booking/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      formik.setValues({
        bookingno: roomedit.data.bookingno,
        roomno: roomedit.data.roomno,
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
        idno: roomedit.data.idno,
        address: roomedit.data.address,
        note: roomedit.data.note,
      });
      setcurrentroom(roomedit.data._id);
      setedit(true);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  let handleView = async (id) => {
    try {
      let view = await axios.get(
        `https://api-digi.onrender.com/booking/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
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
          <div className="col-lg-10 ">
            {loading ? (
              <Spinner />
            ) : (
              <Tablelist
                booking={booking}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                formik={formik}
                handleView={handleView}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkinlist;

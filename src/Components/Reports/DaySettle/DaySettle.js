import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import swal from "sweetalert";
import "../Report.css";
import SideBar from "../../Sidebar/Sidebar";
import Spinner from "../../Spinner/Spinner";
import TableModel from "./TableModel";

function DaySettle() {
  const [view, setview] = useState({});
  const [bill, setbill] = useState([]);
  const [edit, setedit] = useState(false);
  const [currentbill, setcurrentbill] = useState("");
  const [loading, setloading] = useState(true);
  async function fetchAll() {
    try {
      let billData = await axios.get("https://api-digi.onrender.com/bill", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });
      setloading(false);
      setbill(billData.data);
    } catch (error) {}
  }
  let formik = useFormik({
    initialValues: {
      invoiceno: "",
      bookingno: "",
      billdate: "",
      name: "",
      email: "",
      contact: "",
      roomno: "",
      roomtype: "",
      package: "",
      price: "",
      status: "",
      checkin: "",
      checkout: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          await axios.put(
            `https://api-digi.onrender.com/billedit/${currentbill}`,
            values,
            {
              headers: {
                Authorization: window.localStorage.getItem("myapptoken"),
              },
            }
          );
          fetchAll();
        } else {
          await axios.post("https://api-digi.onrender.com/bill", values, {
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
      let billedit = await axios.get(
        `https://api-digi.onrender.com/bill/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      formik.setValues({
        invoiceno: billedit.data.invoiceno,
        bookingno: billedit.data.bookingno,
        billdate: billedit.data.billdate,
        name: billedit.data.name,
        email: billedit.data.email,
        contact: billedit.data.contact,
        roomno: billedit.data.roomno,
        roomtype: billedit.data.roomtype,
        package: billedit.data.package,
        price: billedit.data.price,
        status: billedit.data.status,
        checkin: billedit.data.checkin,
        checkout: billedit.data.checkout,
      });
      setcurrentbill(billedit.data._id);
      setedit(true);
    } catch (error) {}
  };

  let handleView = async (id) => {
    try {
      let view = await axios.get(`https://api-digi.onrender.com/bill/${id}`, {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });

      setview(view.data);
      fetchAll();
    } catch (err) {
      alert("Something went wrong");
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
          .delete(`https://api-digi.onrender.com/bill/${id}`, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          })
          .then(() => {
            fetchAll();
            swal(" bill has been deleted!", {
              icon: "success",
              timer: 3000,
            });
          });
      } else {
      }
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div className="d-flex justify-content-between align-items-center ">
            <div>
              <h3 className="titlerep ">Day Settlement</h3>
            </div>
          </div>
          <hr />
          {/* {loading ? (
            <Spinner />
          ) : ( */}
          <TableModel
            bill={bill}
            handleView={handleView}
            view={view}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            formik={formik}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default DaySettle;

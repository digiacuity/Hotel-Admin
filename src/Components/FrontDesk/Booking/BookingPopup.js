import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";

const validationSchema = Yup.object({
  bookingno: Yup.string().required("required"),
  roomno: Yup.string().required("required"),
  package: Yup.string().required("required"),
  status: Yup.string().required("required"),
  advance: Yup.number().required("required"),
  noofguest: Yup.number().required("required"),
  checkin: Yup.date().required("required"),
  checkout: Yup.date().required("required"),
  name: Yup.string().required("required"),
  email: Yup.string().email().required("required"),
  gender: Yup.string().required("required"),
  contact: Yup.string().required("required"),
  idtype: Yup.string().required("required"),
  idno: Yup.number().required("required"),
  address: Yup.string().required("required"),
  note: Yup.string().required("required"),
});
function Booking() {
  let navigate = useNavigate();
  const [rooms, setrooms] = useState([]);
  async function fetchAll() {
    try {
      let roomData = await axios.get("https://api-digi.onrender.com/rooms", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });
      let bookingData = await axios.get(
        "https://api-digi.onrender.com/bookings",
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );

      setrooms(roomData.data);

      formik.setValues({
        bookingno: bookingData.data.length + 1,
      });
    } catch (error) {}
  }

  let formik = useFormik({
    initialValues: {
      bookingno: "",
      roomno: "",
      package: "",
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
    },
    validationSchema,
    //     validate:(values)=>{
    // const errors={};
    // if(!values.package){
    //   errors.package ="Select   RooomType "
    // }
    // if(!values.roomnumber){
    //   errors.roomnumber ="Enter  Rooom Number "
    // }
    // return errors;
    //     },
    onSubmit: async (values) => {
      try {
        await axios
          .post("https://api-digi.onrender.com/booking", values, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          })
          .then(() => {
            swal(" Booking Successfully", {
              icon: "success",
              timer: 3000,
            });
            fetchAll();
          })
          .then(() => {
            navigate("/reserveview");
          });
      } catch (error) {
        alert("Booking  failed");
      }
    },
  });
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <>
      <div className="back2">
        <Link to={"/reservebook"}>
          <IoMdArrowRoundBack className="back-icon fs-1" />
        </Link>
      </div>
      <div className="container-book">
        <div className="col-6 box mt-2 ms-4">
          <form onSubmit={formik.handleSubmit}>
            <h2>Room Information</h2>
            <hr />
            <div className="container-fluid">
              <div className="row g-2 mt-2">
                <div className="col-1">
                  <label className="form-label fs-6"> No</label>
                  <input
                    type="text"
                    className="form-control "
                    id="bookingno"
                    name="bookingno"
                    disabled
                    onChange={formik.handleChange}
                    value={formik.values.bookingno}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Room No</label>
                  <select
                    className="form-select "
                    name="roomno"
                    id="roomno"
                    aria-label="Default select example"
                    onChange={formik.handleChange}
                    value={formik.values.roomno}
                  >
                    <option className="fs-5   ">-select-</option>
                    {rooms.map((e) => {
                      return (
                        <>
                          {e.roomstatus === "Available" ? (
                            <option className=" text-success fw-semibold fs-5  ">
                              {e.roomnumber}
                            </option>
                          ) : (
                            <>
                              {e.roomstatus === "UnAvailable" ? (
                                <option className="text-danger  fs-5 ">
                                  {e.roomnumber}
                                </option>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                        </>
                      );
                    })}
                  </select>
                </div>

                <div className="col-4 ">
                  <label className="form-label">Package</label>
                  {/* <span  style={{color:"red"}}>*</span> */}

                  <select
                    id="package"
                    name="package"
                    onChange={formik.handleChange}
                    value={formik.values.package}
                    className="form-select "
                  >
                    <option>-Select-</option>
                    <option>Starter Package</option>
                    <option>Honeymoon Package</option>
                    <option>Vacation Package</option>
                    <option>Spring Package</option>
                  </select>
                  <span style={{ color: "red" }}>{formik.errors.package}</span>
                </div>

                <div className="col-4">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    name="status"
                    onChange={formik.handleChange}
                    value={formik.values.status}
                    className="form-select"
                  >
                    <option>-Select-</option>
                    <option>Reserved</option>
                    <option>Checked In</option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">Advance</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="₹"
                    id="advance"
                    name="advance"
                    min="100"
                    max="10000"
                    onChange={formik.handleChange}
                    value={formik.values.advance}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">No Of Guest</label>
                  <select
                    id="noofguest"
                    name="noofguest"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.noofguest}
                    className="form-select"
                  >
                    <option>-Select-</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">Check In</label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkin"
                    name="checkin"
                    min="2021-01-01"
                    onChange={formik.handleChange}
                    value={formik.values.checkin}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Check Out</label>
                  <input
                    type="date"
                    className="form-control"
                    id="checkout"
                    name="checkout"
                    min="2021-01-01"
                    onChange={formik.handleChange}
                    value={formik.values.checkout}
                  />
                </div>

                <h2>Customer Information</h2>
                <hr />

                <div className="col-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>

                <div className="col-4">
                  <label className="form-label">Email</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@mail.com"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="col-4">
                  <label className="form-label">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-select"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <option selected>-Select-</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-4">
                  <label className="form-label">Contact</label>
                  <input
                    type="text"
                    maxLength={10}
                    className="form-control"
                    id="contact"
                    name="contact"
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                  />
                </div>

                <div className="col-4">
                  <label className="form-label">ID Type</label>
                  <select
                    id="idtype"
                    name="idtype"
                    className="form-select"
                    onChange={formik.handleChange}
                    value={formik.values.idtype}
                  >
                    <option selected>-Select-</option>
                    <option>Aadhar Card</option>
                    <option>Pan Card</option>
                    <option>Driving license</option>
                  </select>
                </div>
                <div className="col-4">
                  <label className="form-label">ID No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="idno"
                    name="idno"
                    minlength="10"
                    maxlength="20"
                    onChange={formik.handleChange}
                    value={formik.values.idno}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Note</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="note"
                    name="note"
                    onChange={formik.handleChange}
                    value={formik.values.note}
                  />
                </div>
                <div className="text-center mt-4  ">
                  <input
                    type="submit"
                    className="btn btn-success booking"
                    value="Complete Booking"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;

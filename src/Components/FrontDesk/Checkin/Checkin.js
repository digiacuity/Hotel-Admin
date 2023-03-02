import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import Sidebar from "../../Sidebar/Sidebar";
import Spinner from "../../Spinner/Spinner";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
function Checkin() {
  const [loading, setloading] = useState(false);
  const [dataa, setdataa] = useState([]);
  const [room, setroom] = useState([]);
  let params = useParams();
  const unique_id = uuid();
  const id = unique_id.slice(0, 6);
  let navigate = useNavigate();
  let fetchAll = async () => {
    setloading(true);
    try {
      let data = await axios.get(
        `https://api-digi.onrender.com/reserveview/${params.id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      let roomdata = await axios.get(`https://api-digi.onrender.com/rooms`, {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });
      setroom(roomdata.data);
      let bookingdata = await axios.get(
        "https://api-digi.onrender.com/bookings",
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setdataa(data.data);

      formik.setValues({
        roomno: dataa.roomno,
        type: dataa.type,
        price: dataa.price,
        ac: dataa.ac,
        bed: dataa.bed,
        mode: dataa.mode,
        meal: dataa.meal,
        advance: dataa.advance,
        adult: dataa.adult,
        child: dataa.child,
        checkin: dataa.checkin,
        checkout: dataa.checkout,
        firstname: dataa.firstname,
        lastname: dataa.lastname,
        email: dataa.email,
        gender: dataa.gender,
        contact: dataa.contact,
        idtype: dataa.idtype,
        idno: dataa.idno,
        idfile: dataa.idfile,
        address: dataa.address,
        note: dataa.note,
        status: "",
        bookingstatus: "UnAvailable",
        bookingno: id,
      });
      setloading(false);
    } catch (error) {
      setloading(false);
      alert("Something went wrong booking", error);
    }
  };
  let formik = useFormik({
    initialValues: {
      roomno: "",
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
        setloading(true);
        await axios
          .post("https://api-digi.onrender.com/booking", values, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          })
          .then(async () => {
            const status = { bookingstatus: "UnAvailable" };
            await axios.put(
              `https://api-digi.onrender.com/roomsedit/${params.id}`,
              status,
              {
                headers: {
                  Authorization: window.localStorage.getItem("myapptoken"),
                },
              }
            );

            navigate("/frontdesk/checkedin");
            swal(" Booking Successfully", {
              icon: "success",
              timer: 3000,
            });
          })
          .then(async () => {
            await axios.delete(
              `https://api-digi.onrender.com/reserve/${params.id}`,

              {
                headers: {
                  Authorization: window.localStorage.getItem("myapptoken"),
                },
              }
            );
          });
        setloading(false);
      } catch (error) {
        setloading(false);
        alert(" Booking Error" + error.message);
      }
    },
  });
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6 p-0 ">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-8 col-sm-6  ">
          {loading ? (
            <Spinner />
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="col-lg-12 book-con">
                <h3 className="book-ti"> CheckIn Information </h3>
                <hr />
              </div>
              <div className="row g-2 ps-3 mt-2 ">
                <Row className="g-2 ">
                  <Col md>
                    <FloatingLabel label="Room No">
                      <Form.Select
                        name="roomno"
                        id="roomno"
                        className="book-list"
                        onChange={formik.handleChange}
                        value={formik.values.roomno}
                      >
                        {room.map((item) => (
                          <option value={item.roomnumber}>
                            {item.roomnumber}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label="Room Type">
                      <Form.Select
                        id="type"
                        name="type"
                        className="book-list"
                        onChange={formik.handleChange}
                        value={formik.values.type}
                      >
                        {room.map((item) => (
                          <option value={item.roomtype}>{item.roomtype}</option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label="Price">
                      <Form.Control
                        name="price"
                        id="price"
                        className="book-list"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingSelect" label="Status">
                      <Form.Select
                        id="status"
                        name="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                        className="book-list"
                        required
                      >
                        <option value="Reserved" disabled>
                          Reserved
                        </option>
                        <option value="Checked In">Checked In </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="g-2 ">
                  <Col md>
                    <FloatingLabel controlId="floatingSelect" label="   Bed">
                      <Form.Select
                        id="bed"
                        name="bed"
                        onChange={formik.handleChange}
                        value={formik.values.bed}
                        className="book-list"
                      >
                        <option>-Select -</option>
                        <option value="1">1</option>
                        <option value="2">2 </option>
                        <option value="3">3</option>
                        <option value="4">4 </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Arrival Mode"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        id="mode"
                        name="mode"
                        className="book-list"
                        onChange={formik.handleChange}
                        value={formik.values.mode}
                        required
                      >
                        <option>-Select -</option>
                        <option value="Walk In"> Walk In </option>
                        <option value="Company"> Company </option>
                        <option value="travel Agent"> travel Agent </option>
                        <option value="Oyo"> Oyo </option>
                        <option value="Fab">Fab </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingSelect" label="Meal Type">
                      <Form.Select
                        id="meal"
                        name="meal"
                        className="book-list"
                        onChange={formik.handleChange}
                        value={formik.values.meal}
                        required
                      >
                        <option>-Select -</option>
                        <option value="AP"> AP </option>
                        <option value="MAP"> MAP </option>
                        <option value="CP"> CP </option>
                        <option value="EP"> EP </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label="Advance" className="mb-3">
                      <Form.Control
                        type="number"
                        id="advance"
                        name="advance"
                        min="100"
                        max="10000"
                        onChange={formik.handleChange}
                        value={formik.values.advance}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="g-1 ">
                  <Col md>
                    <FloatingLabel controlId="floatingSelect" label=" Adult">
                      <Form.Select
                        id="adult"
                        name="adult"
                        onChange={formik.handleChange}
                        value={formik.values.adult}
                        required
                        className="book-list"
                      >
                        <option> -Select - </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="6"> 6 </option>
                        <option value="7"> 7 </option>
                        <option value="8"> 8 </option>
                        <option value="9"> 9 </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingSelect" label="Children">
                      <Form.Select
                        id="child"
                        name="child"
                        onChange={formik.handleChange}
                        value={formik.values.child}
                        required
                        className="book-list"
                      >
                        <option> -Select - </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="6"> 6 </option>
                        <option value="7"> 7 </option>
                        <option value="8"> 8 </option>
                        <option value="9"> 9 </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    {/* <ReactDatePicker
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        showTimeInput
                        selected={sdate}
                        minDate={new Date()}
                        name="checkin"
                        className="book-date"
                        id="checkin"
                        onChange={(date) => setsdate(date)}
                        value={formik.values.checkin}
                      /> */}
                    <FloatingLabel label="  Check In">
                      <Form.Control
                        type="datetime-local"
                        id="checkin"
                        name="checkin"
                        onChange={formik.handleChange}
                        value={formik.values.checkin}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    {/* <ReactDatePicker
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        showTimeInput
                        id="checkout"
                        selected={sdate2}
                        minDate={sdate}
                        placeholderText="DD/MM/YYYY"
                        name="checkout"
                        onChange={(date) => setsdate2(date)}
                        value={formik.values.checkout}
                        className="book-date"
                        required
                      /> */}
                    <FloatingLabel label="  Check Out">
                      <Form.Control
                        type="datetime-local"
                        id="checkout"
                        name="checkout"
                        onChange={formik.handleChange}
                        value={formik.values.checkout}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <h3 className="mt-lg-1"> Customer Information </h3> <hr />
                <Row className="g-2 ">
                  <Col md>
                    <FloatingLabel label="First  Name">
                      <Form.Control
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label=" Last Name">
                      <Form.Control
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label="   Email">
                      <Form.Control
                        type="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label="   Contact">
                      <Form.Control
                        id="contact"
                        name="contact"
                        placeholder="contact"
                        type="text"
                        minLength={10}
                        maxLength={10}
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="g-2 ">
                  <Col md>
                    <FloatingLabel controlId="floatingSelect" label=" Gender">
                      <Form.Select
                        id="gender"
                        name="gender"
                        placeholder="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        required
                        className="book-list"
                      >
                        <option>-Select -</option>
                        <option value=" male"> Male</option>
                        <option value="female ">Female </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingSelect" label="  ID Type">
                      <Form.Select
                        id="idtype"
                        name="idtype"
                        placeholder="idtype"
                        onChange={formik.handleChange}
                        value={formik.values.idtype}
                        required
                        className="book-list"
                      >
                        <option> -Select - </option>
                        <option value="aadharcard"> Aadhar Card </option>
                        <option value="pancard"> Pan Card </option>
                        <option value="driving license">Driving license</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label="  ID No">
                      <Form.Control
                        type="text"
                        minLength={10}
                        maxLength={10}
                        placeholder="idno"
                        id="idno"
                        name="idno"
                        onChange={formik.handleChange}
                        value={formik.values.idno}
                        required
                        className="book-list"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="g-2 ">
                  <Col md>
                    <div>
                      <input
                        className="form-control file-input book-list"
                        type="file"
                        id="idfile"
                        placeholder="Chosse"
                        name="idfile"
                        onChange={formik.handleChange}
                        accept="image/x-png,image/gif,image/jpeg"
                        value={formik.values.idfile}
                      />
                    </div>
                  </Col>
                  <Col md>
                    <FloatingLabel label="  Address">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel label=" Note">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        id="note"
                        name="note"
                        onChange={formik.handleChange}
                        value={formik.values.note}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <div className="col-lg-3 mt-3 mx-auto">
                  <input
                    type="submit"
                    disabled={loading}
                    className="btn  booking-btn"
                    value="Checkin"
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkin;

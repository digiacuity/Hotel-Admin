import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import swal from "sweetalert";
import "react-datepicker/dist/react-datepicker.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sidebar from "../../Sidebar/Sidebar";
import Spinner from "../../Spinner/Spinner";
import "./Reservebook.css";
import { v4 as uuid } from "uuid";

function Booking() {
  let params = useParams();
  let navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [sdate, setsdate] = useState(new Date());
  const unique_id = uuid();
  const id = unique_id.slice(0, 6);

  let fetchAll = async () => {
    setloading(true);
    try {
      let roomdata = await axios.get(
        `https://api-digi.onrender.com/roomsview/${params.id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );

      formik.setValues({
        roomno: roomdata.data.roomnumber,
        type: roomdata.data.roomtype,
        price: roomdata.data.price,
        ac: roomdata.data.ac,
        bed: roomdata.data.bed,
        reservestatus: "UnAvailable",
        reserveno: id,
        bookingno: id,
        roomid: roomdata.data._id,
        Extrabed: 0,
        Laundry: 0,
        Restaurant: 0,
        Others: 0,
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
      Extrabed: "",
      Laundry: "",
      Restaurant: "",
      Others: "",
    },

    onSubmit: async (values) => {
      try {
        setloading(true);
        if (values.status === "Reserved") {
          await axios
            .post(`https://api-digi.onrender.com/reserve`, values)
            .then(async () => {
              navigate("/frontdesk/reservelist");
              swal(" Reservation Successfully", {
                icon: "success",
                timer: 3000,
              });

              fetchAll();
            });
        } else {
          await axios.post("https://api-digi.onrender.com/booking", values, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          });
          await axios
            .post("https://api-digi.onrender.com/checkin", values, {
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
              fetchAll();
            });

          setloading(false);
        }
      } catch (error) {
        setloading(false);
        alert(" Booking Error" + error.message);
      }
    },
  });

  // const date = new Date();
  // let min =
  //   date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  // console.log(min);
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
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
                  <h3 className="book-ti"> Room Information </h3>
                  <hr />
                </div>
                <div className="row g-2 ps-3 mt-2 ">
                  <Row className="g-2 ">
                    <Col md>
                      <FloatingLabel label="Room No">
                        <Form.Control
                          name="roomno"
                          id="roomno"
                          className="book-list"
                          onChange={formik.handleChange}
                          value={formik.values.roomno}
                          readOnly
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md className="d-none">
                      <FloatingLabel label="Room No" className="d-none">
                        <Form.Control
                          name="roomid"
                          id="roomid"
                          className="book-list d-none"
                          onChange={formik.handleChange}
                          value={formik.values.roomid}
                          readOnly
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel label="Room Type">
                        <Form.Control
                          id="type"
                          name="type"
                          className="book-list"
                          onChange={formik.handleChange}
                          value={formik.values.type}
                          readOnly
                        />
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
                          <option selected>-select-</option>
                          <option value="Reserved"> Reserved </option>
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
                          <option>-select-</option>
                          <option value="1" selected>
                            1
                          </option>
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
                          <option>-select-</option>
                          <option value="Walk In">Walk In</option>
                          <option value="Company"> Company </option>
                          <option value="travel Agent"> travel Agent </option>
                          <option value="Oyo"> Oyo </option>
                          <option value="Fab">Fab </option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Meal Type"
                      >
                        <Form.Select
                          id="meal"
                          name="meal"
                          className="book-list"
                          onChange={formik.handleChange}
                          value={formik.values.meal}
                          required
                        >
                          <option>-select-</option>
                          <option value="AP"> AP </option>
                          <option value="MAP"> MAP </option>
                          <option value="CP"> CP </option>
                          <option value="EP"> EP </option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel label="Advance">
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
                  <Row className="g-2 ">
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
                          <option>-select-</option>
                          <option value="1">1</option>
                          <option value="2"> 2 </option>
                          <option value="3"> 3 </option>
                          <option value="4"> 4 </option>
                          <option value="5"> 5 </option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Children"
                      >
                        <Form.Select
                          id="child"
                          name="child"
                          onChange={formik.handleChange}
                          value={formik.values.child}
                          required
                          className="book-list"
                        >
                          <option>-select-</option>
                          <option value="1">1</option>
                          <option value="2"> 2 </option>
                          <option value="3"> 3 </option>
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
                          min={sdate}
                          onChange={formik.handleChange}
                          value={formik.values.checkout}
                          required
                          className="book-list"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <h3 className="mt-lg-3 "> Customer Information </h3> <hr />
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
                          <option selected>-select-</option>
                          <option value=" male">Male</option>
                          <option value="female ">Female </option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="  ID Type"
                      >
                        <Form.Select
                          id="idtype"
                          name="idtype"
                          placeholder="idtype"
                          onChange={formik.handleChange}
                          value={formik.values.idtype}
                          required
                          className="book-list"
                        >
                          <option selected>-select-</option>
                          <option value="aadharcard">Aadhar Card</option>
                          <option value="pancard"> Pan Card </option>
                          <option value="driving license">
                            Driving license
                          </option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel label="  ID No">
                        <Form.Control
                          type="text"
                          minLength={10}
                          maxLength={13}
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
                  {/* <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="addg">
                        Add Guest
                      </Accordion.Header>
                      <Accordion.Body>
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
                            <FloatingLabel
                              controlId="floatingSelect"
                              label=" Gender"
                            >
                              <Form.Select
                                id="gender"
                                name="gender"
                                placeholder="gender"
                                onChange={formik.handleChange}
                                value={formik.values.gender}
                                required
                                className="book-list"
                              >
                                <option selected>-select-</option>
                                <option value=" male">Male</option>
                                <option value="female ">Female </option>
                              </Form.Select>
                            </FloatingLabel>
                          </Col>
                          <Col md>
                            <FloatingLabel label="  ID No">
                              <Form.Control
                                type="text"
                                minLength={10}
                                maxLength={13}
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
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion> */}
                  <div className="col-lg-3 mt-3 mb-2 mx-auto">
                    <input
                      type="submit"
                      disabled={loading}
                      className="btn  booking-btn"
                      value="Book Hotel "
                    />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Booking;

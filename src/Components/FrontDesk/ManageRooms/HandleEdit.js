import React from "react";
import Loadingdot from "../../Spinner/Loadingdot";

function HandleEdit({ formik, load }) {
  return (
    <div className="modal-content ">
      <div className="modal-header ">
        <h4 className="modal-title " id="exampleModalLabel1">
          Room Information Edit
        </h4>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body ">
        {load ? (
          <Loadingdot />
        ) : (
          <>
            <div className="container-fluid ">
              <form onSubmit={formik.handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-4  ">
                    <div className="p-2 border  text-center">
                      <label>Booking No</label>

                      <input
                        type="number"
                        name="bookingno"
                        id="bookingno"
                        value={formik.values.bookingno}
                        className="form-control  p-2 mt-2 border text-center"
                        readOnly
                      />
                    </div>
                  </div>
                  {formik.values.newroomno && (
                    <>
                      <div className="col-lg-4 border  p-2">
                        <label>New Room No</label>

                        <input
                          type="text"
                          name="newroomno"
                          id="newroomno"
                          onChange={formik.handleChange}
                          value={formik.values.newroomno}
                          className="form-control  p-2   mt-2 border text-center"
                        />
                      </div>
                    </>
                  )}

                  <div className="col-lg-4 ">
                    <div className="p-2 border  text-center">
                      <label>Room No</label>

                      <input
                        type="text"
                        name="roomno"
                        id="roomno"
                        onChange={formik.handleChange}
                        value={formik.values.roomno}
                        className="form-control  p-2 mt-2 border text-center"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 ">
                    <div className="p-2 border  text-center">
                      <label>Room Type</label>

                      <select
                        onChange={formik.handleChange}
                        value={formik.values.package}
                        className="form-select  p-2 mt-2 border text-center"
                        name="package"
                        id="package"
                      >
                        <option>Single</option>
                        <option>Double</option>
                        <option>Deluxe</option>
                        <option>Super Deluxe</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="p-2 border  text-center">
                      <label>Status</label>

                      <select
                        id="status"
                        name="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                        className="form-select  p-2 mt-2 border text-center"
                      >
                        <option>-Select -</option>
                        <option value="Reserved"> Reserved </option>
                        <option value="Checked In">Checked In </option>
                        <option value="Checked Out">Checked Out </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="p-2 border  text-center">
                      <label>Bed</label>

                      <select
                        onChange={formik.handleChange}
                        value={formik.values.bed}
                        className="form-select  p-2 mt-2 border text-center"
                        name="bed"
                        id="bed"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="p-2 border  text-center">
                      <label className="form-label">Mode</label>
                      <select
                        id="mode"
                        name="mode"
                        onChange={formik.handleChange}
                        value={formik.values.mode}
                        className="form-select  text-center"
                        required
                      >
                        <option>Walk-In</option>
                        <option>Company</option>
                        <option>OTA</option>
                        <option>Other OTA</option>
                        {/* <option>Checked Out</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="p-2 border  text-center">
                      <label className="form-label">Advance</label>
                      <input
                        type="number"
                        className="form-control text-center"
                        placeholder="₹"
                        id="advance"
                        name="advance"
                        min="100"
                        max="10000"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.advance}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div className="p-2 border  text-center">
                      <label className="form-label">No Of Guest</label>
                      <select
                        id="noofguest"
                        name="noofguest"
                        onChange={formik.handleChange}
                        value={formik.values.noofguest}
                        className="form-select text-center"
                      >
                        <option>-Select-</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border  text-center">
                      <label>Price</label>

                      <input
                        type="number"
                        name="price"
                        id="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        className="form-control  p-2 mt-2 border  text-center"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-2 border  text-center">
                      <label>Check In</label>

                      <input
                        type="date"
                        name="checkin"
                        id="checkin"
                        onChange={formik.handleChange}
                        value={formik.values.checkin}
                        className="form-control  p-2 mt-2 border  text-center"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-2 border  text-center">
                      <label>Check Out</label>

                      <input
                        type="date"
                        name="checkout"
                        id="checkout"
                        onChange={formik.handleChange}
                        value={formik.values.checkout}
                        className="form-control  p-2 mt-2 border text-center"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 border  p-2">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control  text-center"
                      id="name"
                      name="name"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>

                  <div className="col-lg-4 border  p-2">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control  text-center"
                      id="email"
                      placeholder="example@mail.com"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="col-lg-4 border  p-2">
                    <label className="form-label">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      className="form-select  text-center"
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                    >
                      <option selected>-Select-</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="col-lg-4 border  p-2">
                    <label className="form-label">Contact</label>
                    <input
                      type="text"
                      maxLength={10}
                      className="form-control  text-center"
                      id="contact"
                      name="contact"
                      onChange={formik.handleChange}
                      value={formik.values.contact}
                    />
                  </div>

                  <div className="col-lg-4 border  p-2">
                    <label className="form-label">ID Type</label>
                    <select
                      id="idtype"
                      name="idtype"
                      className="form-select  text-center"
                      onChange={formik.handleChange}
                      value={formik.values.idtype}
                    >
                      <option selected>-Select-</option>
                      <option>Aadhar Card</option>
                      <option>Pan Card</option>
                      <option>Driving license</option>
                    </select>
                  </div>
                  <div className="col-lg-4 border  p-2">
                    <label className="form-label">ID No</label>
                    <input
                      type="text"
                      className="form-control  text-center"
                      id="idno"
                      name="idno"
                      minlength="10"
                      maxlength="20"
                      onChange={formik.handleChange}
                      value={formik.values.idno}
                    />
                  </div>
                  <div className="col-12 border  p-2">
                    <label className="form-label">Address</label>
                    <textarea
                      type="text"
                      className="form-control  text-center"
                      id="address"
                      name="address"
                      placeholder="Address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                    />
                  </div>
                  <div className="col-12 border  p-2">
                    <label className="form-label">Note</label>
                    <textarea
                      type="text"
                      className="form-control  text-center"
                      id="note"
                      name="note"
                      onChange={formik.handleChange}
                      value={formik.values.note}
                    />
                  </div>
                </div>
                <div className="form-group btn-submit mt-4">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
                  />
                  <button
                    type="button"
                    value="cancel"
                    className="btn btn-danger ms-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HandleEdit;

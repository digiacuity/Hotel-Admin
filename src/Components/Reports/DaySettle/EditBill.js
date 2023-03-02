import React from "react";

function EditBill({ formik }) {
  return (
    <div className="container-fluid ">
      <form onSubmit={formik.handleSubmit}>
        <div className="row gy-4 row-cols-2">
          <div className="col-4">
            <label>Invoice No</label>

            <input
              type="text"
              name="invoiceno"
              id="invoiceno"
              onChange={formik.handleChange}
              value={formik.values.invoiceno}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Booking No</label>

            <input
              type="text"
              name="bookingno"
              id="bookingno"
              onChange={formik.handleChange}
              value={formik.values.bookingno}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Bill Date</label>

            <input
              type="date"
              name="billdate"
              id="billdate"
              min="2020-01-01"
              onChange={formik.handleChange}
              value={formik.values.billdate}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Name</label>

            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Email</label>

            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Contact</label>

            <input
              type="text"
              name="contact"
              id="contact"
              onChange={formik.handleChange}
              value={formik.values.contact}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Room No</label>
            <input
              type="text"
              name="roomno"
              id="roomno"
              onChange={formik.handleChange}
              value={formik.values.roomno}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Room Type</label>

            <select
              name="roomtype"
              id="roomtype"
              onChange={formik.handleChange}
              value={formik.values.roomtype}
              className="form-select  p-2 mt-2 border text-center "
              aria-label="Default select example"
            >
              <option>Single </option>
              <option>Double </option>
              <option>Family </option>
            </select>
          </div>
          <div className="col-4">
            <label>Package</label>

            <select
              name="package"
              id="package"
              onChange={formik.handleChange}
              value={formik.values.package}
              className="form-select  p-2 mt-2 border text-center "
              aria-label="Default select example"
            >
              <option>Single Package</option>
              <option>Double Package</option>
              <option>Family Package</option>
            </select>
          </div>
          <div className="col-6">
            <label>Check In</label>

            <input
              type="date"
              name="checkin"
              id="checkin"
              min="2020-01-01"
              onChange={formik.handleChange}
              value={formik.values.checkin}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-6">
            <label>Check Out</label>

            <input
              type="date"
              name="checkout"
              id="checkout"
              min="2020-01-01"
              onChange={formik.handleChange}
              value={formik.values.checkout}
              className="form-control  p-2 mt-2 border  text-center"
            />
          </div>
          <div className="col-6">
            <label>Price</label>

            <input
              type="text"
              name="price"
              id="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              className="form-control  p-2 mt-2 border  text-center"
            />
          </div>
          <div className="col-6">
            <label>Status</label>

            <select
              name="status"
              id="status"
              onChange={formik.handleChange}
              value={formik.values.status}
              className="form-select  p-2 mt-2 border  text-center"
              aria-label="Default select example"
            >
              <option className="text-success ">paid</option>
              <option className="text-warning">pending</option>
              <option className="text-danger">unpaid</option>
            </select>
          </div>
        </div>
        <div className="form-group btn-submit mt-4">
          <input
            type={"submit"}
            className="btn btn-primary"
            value="Update"
            data-bs-dismiss="modal"
            aria-label="Close"
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
  );
}

export default EditBill;

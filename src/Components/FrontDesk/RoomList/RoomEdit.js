import React from "react";

function RoomEdit({ formik }) {
  return (
    <div className="container-fluid ">
      <form onSubmit={formik.handleSubmit}>
        <div className="row g-1 ">
          <div className="col-lg-6">
            <div className="  room-lable2 ">
              <label htmlFor="roomnumber" className="col-form-label ">
                Room No
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              name="roomnumber"
              id="roomnumber"
              onChange={formik.handleChange}
              value={formik.values.roomnumber}
              className="form-control   room-name2"
            />
          </div>
          <div className="col-lg-6">
            <div className="  room-lable2">
              <label htmlFor="floor" className="col-form-label ">
                Floor
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <select
              name="floor"
              id="floor"
              onChange={formik.handleChange}
              value={formik.values.floor}
              className="form-select    room-name3"
              aria-label="Default select example"
            >
              <option selected>-select-</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
              <option value="Fifth">Fifth</option>
            </select>
          </div>
          <div className="col-lg-6">
            <div className="  room-lable2">
              <label htmlFor="roomtype" className="col-form-label">
                Room Type
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <select
              onChange={formik.handleChange}
              value={formik.values.roomtype}
              className="form-select  room-name2"
              name="roomtype"
              id="roomtype"
              aria-label="Default select example"
            >
              <option selected>-select-</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Super Deluxe">Super Deluxe</option>
            </select>
          </div>
          <div className="col-lg-6">
            <div className="  room-lable2">
              <label htmlFor="ac" className="col-form-label">
                AC
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <select
              onChange={formik.handleChange}
              value={formik.values.ac}
              className="form-select    room-name3"
              name="ac"
              id="ac"
              aria-label="Default select example"
            >
              <option selected>-select-</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>
          <div className="col-lg-6">
            <div className="  room-lable2">
              <label htmlFor="bed" className="col-form-label ">
                Bed
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <select
              name="bed"
              id="bed"
              onChange={formik.handleChange}
              value={formik.values.bed}
              className="form-select    room-name3"
              aria-label="Default select example"
            >
              <option selected>-select-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="col-lg-6">
            <div className="  room-lable2">
              <label htmlFor="price" className="col-form-label ">
                Price
              </label>
            </div>
          </div>
          <div className="col-lg-6 ">
            <input
              onChange={formik.handleChange}
              value={formik.values.price}
              className="form-control    room-name2"
              name="price"
              id="price"
              type="number"
            />
          </div>
          <div className="col-lg-6">
            <div className="  room-lable2">
              <label htmlFor="roomstatus" className="col-form-label">
                Status
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <select
              name="roomstatus"
              id="roomstatus"
              onChange={formik.handleChange}
              value={formik.values.roomstatus}
              className="form-select    room-name3"
              aria-label="Default select example"
            >
              <option selected>-select-</option>

              <option value="Available" className="text-success">
                Clean
              </option>
              <option value="UnAvailable" className="text-danger">
                UnClean
              </option>
            </select>
          </div>

          <div className="col-lg-6">
            <div className="  room-lable2">
              <label htmlFor="bookingstatus" className="col-form-label ">
                Book Status
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <select
              name="bookingstatus"
              id="bookingstatus"
              onChange={formik.handleChange}
              value={formik.values.bookingstatus}
              className="form-select    room-name3"
              aria-label="Default select example"
            >
              <option selected>-select-</option>

              <option value="Available" className="text-success">
                Available
              </option>
              <option value="UnAvailable" className="text-danger">
                UnAvailable
              </option>
            </select>
          </div>
          <div className="form-group   btn-submit mt-2 pt-2">
            <input
              type={"submit"}
              className="btn btn-primary  "
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
        </div>
      </form>
    </div>
  );
}

export default RoomEdit;

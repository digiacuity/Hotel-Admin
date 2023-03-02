import React from "react";

function HandleEdit({ formik }) {
  return (
    <>
      <div className="container-fluid ">
        <form onSubmit={formik.handleSubmit}>
          <div className="row g-1 ">
            <div className="col-lg-6">
              <div className="  room-lable2">
                <label htmlFor="bookingno" className="col-form-label ">
                  Booking No
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                name="bookingno"
                id="bookingno"
                onChange={formik.handleChange}
                value={formik.values.bookingno}
                className="form-control   room-name2"
                disabled
              />
            </div>
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
                name="roomno"
                id="roomno"
                onChange={formik.handleChange}
                value={formik.values.roomno}
                className="form-control   room-name2"
                disabled
              />
            </div>

            <div className="col-lg-6">
              <div className="  room-lable2 ">
                <label htmlFor="roomnumber" className="col-form-label ">
                  Name
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="form-control   room-name2 " disabled>
                {formik.values.firstname + " " + formik.values.lastname}
              </span>
            </div>
            <div className="col-lg-6">
              <div className="  room-lable2 ">
                <label htmlFor="roomnumber" className="col-form-label ">
                  Extra Bed
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <input
                type="number"
                name="Extrabed"
                id="Extrabed"
                onChange={formik.handleChange}
                value={formik.values.Extrabed}
                className="form-control   room-name2"
              />
            </div>
            <div className="col-lg-6">
              <div className="  room-lable2 ">
                <label htmlFor="Laundry" className="col-form-label ">
                  Laundry
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <input
                type="number"
                name="Laundry"
                id="Laundry"
                onChange={formik.handleChange}
                value={formik.values.Laundry}
                className="form-control   room-name2"
              />
            </div>
            <div className="col-lg-6">
              <div className="  room-lable2 ">
                <label htmlFor=" Restaurant" className="col-form-label ">
                  Restaurant
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <input
                type="number"
                name="Restaurant"
                id="Restaurant"
                onChange={formik.handleChange}
                value={formik.values.Restaurant}
                className="form-control   room-name2"
              />
            </div>
            <div className="col-lg-6">
              <div className="  room-lable2 ">
                <label htmlFor="Others" className="col-form-label ">
                  Others
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <input
                type="number"
                name="Others"
                id="Others"
                onChange={formik.handleChange}
                value={formik.values.Others}
                className="form-control   room-name2"
              />
            </div>
            {/* <div className="col-lg-6">
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
            </div> */}

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
    </>
  );
}

export default HandleEdit;

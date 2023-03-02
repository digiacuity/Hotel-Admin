import React from "react";

function HandleShift({ formik, rooms }) {
  return (
    <div className="container-fluid ">
      <div className="row mb-4 mt-2">
        <div className="col-4">
          <div className="row gy-3   ">
            <div className="col-10">
              <label className="form-label">Room No</label>
              <p className="form-control">{formik.values.roomnumber}</p>
            </div>
            <div className="col-10">
              <label className="form-label">Room Type</label>
              <p className="form-control">{formik.values.roomtype}</p>
            </div>
            <div className="col-10">
              <label className="form-label">Guest Name</label>
              <p className="form-control">{formik.values.name}</p>
            </div>

            <div className="col-10">
              <label className="form-label">Check In</label>
              <p className="form-control">{formik.values.checkin}</p>
            </div>
            <div className="col-10">
              <label className="form-label">Check Out</label>
              <p className="form-control">{formik.values.checkout}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 ">
          <form onSubmit={formik.handleSubmit}>
            <div className="row gy-3 ms-5 ">
              <div className="col-10">
                <label className="form-label">New Room No</label>

                <select
                  className="form-select"
                  name="newroomno"
                  id="newroomno"
                  aria-label="Default select example"
                  onChange={formik.handleChange}
                >
                  <option selected>-select-</option>
                  {rooms.map((e, i) => {
                    return <option key={i}>{e.roomnumber}</option>;
                  })}
                </select>
              </div>

              <div className="col-10">
                <label className="form-label">New Room Type</label>

                <select
                  className="form-select"
                  name="newtype"
                  id="newtype"
                  aria-label="Default select example"
                  onChange={formik.handleChange}
                >
                  <option value="single">Single </option>
                  <option value="double">Double </option>
                  <option value="delux">Delux </option>
                  <option value="super delux"> Super Delux</option>
                </select>
              </div>

              <div className="col-10">
                <label className="form-label">Check In</label>
                <input
                  type="date"
                  className="form-control "
                  name="newcheckin"
                  id="newcheckin"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="col-10">
                <label className="form-label">Check Out</label>
                <input
                  type="date"
                  name="newcheckout"
                  id="newcheckout"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="col-10">
                <label className="form-label">Remark</label>
                <input
                  type="text"
                  name="remark"
                  id="remark"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="form-group  mt-4 btn-submit">
              <input
                type="submit"
                className="btn btn-primary "
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
      </div>
    </div>
  );
}

export default HandleShift;

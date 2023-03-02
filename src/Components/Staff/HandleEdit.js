import React from "react";

function HandleEdit({ formik }) {
  return (
    <div className="container-fluid ">
      <form onSubmit={formik.handleSubmit}>
        <div className="row gy-4 row-cols-2">
          <div className="col-4">
            <label>ID</label>

            <input
              type="text"
              name="id"
              id="id"
              onChange={formik.handleChange}
              value={formik.values.id}
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
            <label>Designation</label>

            <select
              name="department"
              id="department"
              onChange={formik.handleChange}
              value={formik.values.department}
              className="form-select  p-2 mt-2 border text-center "
              aria-label="Default select example"
            >
              <option>Manager </option>
              <option>Front Desk </option>
              <option>House Keeping </option>
              <option>maintenance</option>
            </select>
          </div>
          <div className="col-4">
            <label>Shift</label>

            <select
              name="shift"
              id="shift"
              onChange={formik.handleChange}
              value={formik.values.shift}
              className="form-select  p-2 mt-2 border text-center "
              aria-label="Default select example"
            >
              <option>A </option>
              <option>B </option>
              <option>C </option>
            </select>
          </div>

          <div className="col-4">
            <label>Joining Date</label>

            <input
              type="date"
              name="date"
              id="date"
              min="2020-01-01"
              onChange={formik.handleChange}
              value={formik.values.date}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Gender</label>

            <select
              name="gender"
              id="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-select  p-2 mt-2 border text-center "
              aria-label="Default select example"
            >
              <option>Male </option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-4">
            <label>Date Of Birth</label>

            <input
              type="date"
              name="dob"
              id="dob"
              min="1990-01-01"
              onChange={formik.handleChange}
              value={formik.values.dob}
              className="form-control  p-2 mt-2 border text-center "
            />
          </div>
          <div className="col-4">
            <label>Contact</label>

            <input
              type="text"
              name="contact"
              id="contact"
              maxLength={10}
              onChange={formik.handleChange}
              value={formik.values.contact}
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
          <div className="col-12">
            <label>Address</label>

            <input
              type="Text"
              name="address"
              id="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              className="form-control  p-2 mt-2 border text-center "
            />
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

export default HandleEdit;

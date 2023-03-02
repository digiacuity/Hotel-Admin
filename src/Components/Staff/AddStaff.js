import React from "react";
import { v4 as uuid } from "uuid";
import SideBar from "../Sidebar/Sidebar";
import { useFormik } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  let navigate = useNavigate();
  const unique_id = uuid();
  const id = unique_id.slice(0, 3);
  let formik = useFormik({
    initialValues: {
      id: id,
      name: "",
      department: "",
      shift: "",
      date: "",
      contact: "",
      gender: "",
      dob: "",
      email: "",
      address: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post("https://api-digi.onrender.com/staff", values, {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        });
        swal(" Employee Added", {
          icon: "success",
          timer: 3000,
        });
        navigate("/staff");
      } catch (error) {}
    },
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <SideBar />
          </div>

          <div className="col-10   ">
            <div className="container-fluid  ">
              <div className="row mt-2 ">
                <h2>Add Staff </h2>
                <hr />
                <form onSubmit={formik.handleSubmit}>
                  <div className="row  gy-4 mt-2   ">
                    <div className="col-4">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="form-control"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="contact" className="form-label">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="form-control"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="gender" className="form-label mt-1">
                        Gender
                      </label>

                      <select
                        name="gender"
                        id="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>

                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="row gy-3">
                      <div className="col-4">
                        <label htmlFor="date" className="col-form-label">
                          Date Of Birth
                        </label>

                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          min="1990-01-01"
                          onChange={formik.handleChange}
                          value={formik.values.dob}
                          className="form-control"
                        />
                      </div>

                      <div className="col-4">
                        <label htmlFor="date" className="col-form-label">
                          Joining Date
                        </label>

                        <input
                          type="date"
                          name="date"
                          id="date"
                          min="2020-01-01"
                          onChange={formik.handleChange}
                          value={formik.values.date}
                          className="form-control"
                        />
                      </div>

                      <div className="col-4">
                        <label htmlFor="shift" className="col-form-label">
                          Shift
                        </label>

                        <select
                          name="shift"
                          id="shift"
                          onChange={formik.handleChange}
                          value={formik.values.shift}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>-select-</option>

                          <option>A</option>
                          <option>B</option>
                          <option>c</option>
                        </select>
                      </div>
                    </div>
                    <div className="row gy-4">
                      <div className="col-4">
                        <label htmlFor="department" className="form-label mt-1">
                          Designation
                        </label>

                        <select
                          onChange={formik.handleChange}
                          value={formik.values.department}
                          className="form-select"
                          name="department"
                          id="department"
                          aria-label="Default select example"
                        >
                          <option selected>-select-</option>
                          <option>Manager</option>
                          <option>Front Desk</option>
                          <option>House Keeping</option>
                          <option>Maintenance</option>
                        </select>
                      </div>
                      <div className="col-4 ">
                        <label htmlFor="contact" className="form-label mt-1">
                          Contact
                        </label>

                        <input
                          type="text"
                          name="contact"
                          id="contact"
                          maxLength={10}
                          onChange={formik.handleChange}
                          value={formik.values.contact}
                          className="form-control"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="address" className="form-label mt-1">
                          Address
                        </label>

                        <textarea
                          type="text"
                          name="address"
                          id="address"
                          rows={1}
                          onChange={formik.handleChange}
                          value={formik.values.address}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center mt-5 mb-1">
                      <button
                        type="submit"
                        className=" ms-5 btn btn-primary gap-2"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning text-light gap-2 mx-5"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStaff;

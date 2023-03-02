import React from "react";
import SideBar from "../Sidebar/Sidebar";
import "./Mainta.css";
function Maintenance() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 p-0">
            <SideBar />
          </div>

          <div className="col-10 ">
            <h3 className="m-title">Maintenance Deatils</h3>
            <hr />
            <div className="container-fluid ">
              <div className="row">
                <form>
                  <div className="row g-3 mt-2">
                    <div className="col-lg-2">
                      <label htmlFor="input" className="form-label">
                        Room Number
                      </label>
                    </div>

                    <div className="col-lg-4">
                      <input
                        type="text"
                        name="roomnumber"
                        id="roomnumber"
                        // onChange={formik.handleChange}
                        // value={formik.values.roomnumber}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-3">
                    <div className="col-lg-2">
                      <label htmlFor="input" className="form-label">
                        Maintenance Type
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <select
                        name="type"
                        id="type"
                        // onChange={formik.handleChange}
                        // value={formik.values.status}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>-select-</option>
                        <option>Water</option>
                        <option>Electrical </option>
                        <option>Bed</option>
                      </select>
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-lg-2">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Block From
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="date"
                        name="block"
                        id="block"
                        // onChange={formik.handleChange}
                        // value={formik.values.checkin}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-lg-2">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Block To
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <input
                        type="date"
                        name="block"
                        id="block"
                        // onChange={formik.handleChange}
                        // value={formik.values.checkout}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-lg-2">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Description
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 text-center mt-5">
                      <button
                        type="submit"
                        // onClick={buttonclick}
                        className=" ms-5 btn btn-primary gap-2"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning gap-2 mx-5"
                      >
                        Reset
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
}

export default Maintenance;

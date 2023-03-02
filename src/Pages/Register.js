import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Pages.css";
import signupimg from "../assets/register-img.png";
import swal from "sweetalert";
import { useState } from "react";
import Spinner from "../Components/Spinner/Spinner";

function Register() {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setloading(true);
      try {
        await axios.post("https://api-digi.onrender.com/register", values);
        navigate("/");
        setloading(false);
      } catch (error) {
        swal({
          title: "Something Went Wrong !",
          icon: "error",
          timer: 3000,
        });
      }
    },
  });
  return (
    <section>
      {loading ? <Spinner /> : null}
      <div className="px-4  px-md-5 pt-sm-1 text-center text-lg-start mt-4">
        <div className="container">
          <div className="row gx-lg-5 gx-sm-2 align-items-center">
            <div className="  col-xl-7 col-lg-6 col-md-10 col-sm-12">
              <img src={signupimg} className="img-fluid" alt="Sample" />
            </div>
            <div className="col-xl-5 col-lg-6  col-sm-12 mt-lg-4">
              <div className="card register-card">
                <div className="card-body py-3  px-md-5">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-12 mb-3">
                        <div className="form-outline">
                          <label className="form-label">
                            Name <span className="important"> * </span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control "
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-3">
                      <label className="form-label">
                        Email <span className="important"> * </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control  "
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label className="form-label">
                        Password <span className="important"> * </span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control  "
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label className="form-label">
                        Confirm Password <span className="important"> * </span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control  "
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        required
                      />
                    </div>
                    <div className="col-lg-12 d-grid ">
                      <input
                        type={"submit"}
                        className="btn color-btn mb-3 "
                        value="Sign Up"
                      />
                      <p className="small fs-6  mt-2 pt-1 mb-2 mx-auto">
                        Have an account already ?
                        <Link to="/" className="color ms-2  ">
                          SIgn in
                        </Link>
                      </p>
                    </div>
                    {/* <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">
                        Sign in with
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <button
                        type="button"
                        className="btn color-btn btn-floating  mx-3"
                      >
                        <i className="bi bi-facebook"> </i>
                      </button>
                      <button
                        type="button"
                        className="btn color-btn btn-floating mx-3"
                      >
                        <i className="bi bi-twitter"> </i>
                      </button>
                      <button
                        type="button"
                        className="btn color-btn btn-floating mx-3"
                      >
                        <i className="bi bi-linkedin"> </i>
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

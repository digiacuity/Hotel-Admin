import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Pages.css";
import loginimg from "../assets/login-img.png";
import swal from "sweetalert";
import Spinner from "../Components/Spinner/Spinner";

function Login() {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setloading(true);
      try {
        let loginData = await axios.post(
          "https://api-digi.onrender.com/login",

          values
        );

        window.localStorage.setItem("myapptoken", loginData.data.token);
        navigate("/dashboard");
        setloading(false);
      } catch (error) {
        setloading(false);
        swal({
          title: "Credentials Error!",
          icon: "error",
          timer: 3000,
        });
      }
    },
  });

  return (
    <>
      <section>
        <div className="container-fluid ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className=" col-xl-7 col-lg-7 col-md-10 col-sm-12  mt-lg-4 mt-sm-3">
              <img src={loginimg} className="img-fluid" alt="Sample" />
            </div>
            <div className="col-xl-4 col-lg-5  col-md-10 col-sm-12  mb-sm-2 login-card">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-outline mb-sm-3 ">
                  <label className="form-label mb-sm-3  fs-5 ">
                    Email <span className="important"> * </span>
                  </label>
                  <input
                    type={"email"}
                    name="email"
                    id="email"
                    className="form-control   "
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div className="form-outline mb-sm-4 ">
                  <label className="form-label mb-sm-3  fs-5">
                    Password <span className="important"> * </span>
                  </label>
                  <input
                    type={"password"}
                    className="form-control mb-sm-3"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Enter password"
                    required
                  />
                </div>

                {/* <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check check ">
                    <input
                      className="form-check-input me-2 check"
                      type="checkbox"
                      value=""
                      name="checkbox"
                      id="checkbox"
                    />
                    <label
                      className="form-check-label fs-6 check fs-5"
                      htmlFor="checkbox"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to="/register" className="text-body fs-6">
                    Forgot password?
                  </Link>
                </div> */}

                <div className=" col-sm-12 text-center text-lg-start mt-3 pt-2 d-grid ">
                  {loading ? <Spinner /> : null}
                  <input
                    type="submit"
                    disabled={loading}
                    className="btn color-btn   "
                    style={{
                      paddingleft: "2.5rem",
                      paddingright: "2.5rem",
                    }}
                    value={"Sign In"}
                  />
                  {!loading && (
                    <p className="small fs-6  mt-3 pt-2 mx-auto">
                      Don't have an account?
                      <Link to="register" className="color ms-2">
                        Sign Up
                      </Link>
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

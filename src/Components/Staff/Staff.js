import axios from "axios";
import SideBar from "../Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import swal from "sweetalert";
import "./Staff.css";
import Spinner from "../Spinner/Spinner";
import TableStaff from "./TableStaff";
import { v4 as uuid } from "uuid";
function Staff() {
  const [staff, setstaff] = useState([]);
  const [viewStaff, setViewStaff] = useState({});
  const [edit, setedit] = useState(false);
  const [currentstaff, setcurrentstaff] = useState("");
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const unique_id = uuid();
  const id = unique_id.slice(0, 3);
  async function fetchAll() {
    try {
      setloading(true);
      let staffData = await axios.get("https://api-digi.onrender.com/staff", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });
      setloading(false);
      setstaff(staffData.data);
    } catch (error) {
      setloading(false);
    }
  }

  let formik = useFormik({
    initialValues: {
      id: id,
      name: "",
      department: "",
      shift: "",
      date: "",
      gender: "",
      dob: "",
      email: "",
      contact: "",
      address: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          await axios.put(
            `https://api-digi.onrender.com/staffedit/${currentstaff}`,
            values,
            {
              headers: {
                Authorization: window.localStorage.getItem("myapptoken"),
              },
            }
          );
          swal(" Updated Successfully", {
            icon: "success",
            timer: 2000,
          });
          fetchAll();
        } else {
          await axios.post("https://api-digi.onrender.com/staff", values, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          });
          fetchAll();
        }
      } catch (error) {
        alert("Employee Update Error");
      }
    },
  });

  let handleEdit = async (id) => {
    setopen(true);
    try {
      let staffEdit = await axios.get(
        `https://api-digi.onrender.com/staffview/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      formik.setValues({
        name: staffEdit.data.name,
        department: staffEdit.data.department,
        shift: staffEdit.data.shift,
        date: staffEdit.data.date,
        gender: staffEdit.data.gender,
        dob: staffEdit.data.dob,
        email: staffEdit.data.email,
        contact: staffEdit.data.contact,
        address: staffEdit.data.address,
      });
      setcurrentstaff(staffEdit.data._id);
      setedit(true);
      setopen(false);
    } catch (error) {
      setopen(false);
      alert("Employee Update Error");
    }
  };

  let handleView = async (id) => {
    setopen(true);
    try {
      let viewStaff = await axios.get(
        `https://api-digi.onrender.com/staffview/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setopen(false);
      setViewStaff(viewStaff.data);
    } catch (err) {
      setopen(false);
    }
  };

  let handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://api-digi.onrender.com/staff/${id}`, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          })
          .then(() => {
            fetchAll();
          });

        swal(" Employee has been deleted!", {
          icon: "success",
          timer: 3000,
        });
      } else {
      }
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2  p-0">
            <SideBar />
          </div>

          <div className="col-lg-10  ">
            <div className="d-flex justify-content-between   align-items-center ">
              <div>
                <h3 className="st-title">Staffs</h3>
              </div>

              <div>
                {open ? null : (
                  <>
                    <button className="btn  btn-add mt-2">
                      <Link to="/addstaff" className="btn-add">
                        Add Staff
                      </Link>
                    </button>
                  </>
                )}
              </div>
            </div>
            <hr />
            {loading ? (
              <Spinner />
            ) : (
              <TableStaff
                staff={staff}
                viewStaff={viewStaff}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                formik={formik}
                handleView={handleView}
                open={open}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;

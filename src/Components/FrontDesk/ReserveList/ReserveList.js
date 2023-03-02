import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import "./ReserveList.css";
import SideBar from "../../Sidebar/Sidebar";
import TableRList from "./TableRList";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import swal from "sweetalert";

function ReserveList() {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const [List, setList] = useState([]);
  const [res, setres] = useState("");
  const [mode, setmode] = useState("");
  const [date, setdate] = useState("");

  const [viewList, setViewList] = useState([]);
  const fetchAll = async () => {
    try {
      setloading(true);
      let ReserveData = await axios.get(
        "https://api-digi.onrender.com/reservelist"
      );
      setList(ReserveData.data);

      setloading(false);
    } catch (err) {
      console.log("error Reserve List");
    }
  };

  let handleView = async (id) => {
    setopen(true);
    try {
      let viewdata = await axios.get(
        `https://api-digi.onrender.com/reserveview/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setViewList(viewdata.data);
      setopen(false);
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
          .delete(`https://api-digi.onrender.com/reserve/${id}`, {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          })
          .then(() => {
            fetchAll();
          });

        swal(" Reservelist has been deleted!", {
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
      <div className="container-fluid ">
        <div className="row  ">
          <div className="col-lg-2 p-0 ">
            <SideBar />
          </div>
          <div className="col-lg-10">
            <div>
              <h3 className="r-title ">Reserve List</h3>
            </div>
            <hr />

            <div className="nav-menu2 py-2 ps-4">
              <div>
                <Link to="/frontdesk">FrontDesk</Link>
                <FaAngleRight className="sidebar-arrow" />
                <Link to="/frontdesk/reservelist">Reserve List</Link>
              </div>
              <div className="search-con">
                <div>
                  <div className="ms-3">
                    <label for="roomtype">Mode</label>
                  </div>

                  <select
                    name="roomtype"
                    id="roomtype"
                    className="form-control-se"
                    onChange={(event) => {
                      setmode(event.target.value);
                    }}
                  >
                    <option value="">-Select -</option>
                    <option value="Walk In"> Walk In </option>
                    <option value="Company"> Company </option>
                    <option value="travel Agent"> travel Agent </option>
                    <option value="Oyo"> Oyo </option>
                    <option value="Fab">Fab </option>
                  </select>
                </div>
                <div>
                  <div className="ms-3">
                    <label>Date</label>
                  </div>
                  <div>
                    <input
                      type="date"
                      className="form-control-se"
                      onChange={(event) => {
                        setdate(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="ms-3">
                    <label>Reservation ID</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="id"
                      id="id"
                      className="form-control-se"
                      onChange={(event) => {
                        setres(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {loading ? (
              <Spinner />
            ) : (
              <TableRList
                List={List}
                viewList={viewList}
                handleView={handleView}
                open={open}
                handleDelete={handleDelete}
                res={res}
                mode3={mode}
                date3={date}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReserveList;

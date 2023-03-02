import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import "./Topbar.css";

function Topbar() {
  let navigate = useNavigate();
  let handleLogout = () => {
    window.localStorage.removeItem("myapptoken");
    navigate("/");
  };

  return (
    <>
      <div className=" navbar">
        <div className="logo">
          <h3 className="top-title">Dashboard</h3>
        </div>
        {/* <div className="search-container">
          <div className="input-group">
            <input
              type="text"
             className="form-control bg-light ms-3 search mt-2 inn"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={Search}
              onClick={handlesearch}
            />

            <button
             className="btn text-light  btnn mt-2 searchh inn "
              type="submit"
            >
              <FaSistrix className="fs-4 " />
            </button>
          </div>
        </div> */}

        <div className="nav-item">
          <li className=" dropdown-center header-profile  ">
            <p className="nav-link1" data-bs-toggle="dropdown">
              <FaUserCircle className="usericon " />
            </p>
            <div className="dropdown-menu  dropdown-menu-end">
              <div className="dropdown-item  ai-icon">
                <Link to="/profile">
                  <FiUser className="text-primary me-2 fs-4 " /> Profile
                </Link>
              </div>

              <button onClick={handleLogout} className="dropdown-item ai-icon">
                <FiLogOut className="text-danger fs-4 me-2" />
                <span className="ms-2">Logout </span>
              </button>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}

export default Topbar;

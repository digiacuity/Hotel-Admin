import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import SideBar from "../Sidebar/Sidebar";

function FrontDesk() {
  let menu = [
    {
      name: "Room Booking ",
      link: "/frontdesk/booking",
    },
    {
      name: "Reserved List",
      link: "/frontdesk/reservelist",
    },
    {
      name: "Occupied List",
      link: "/frontdesk/checkedin",
    },
    {
      name: "Room List",
      link: "/frontdesk/roomlist",
    },
    {
      name: "Checkout List",
      link: "/frontdesk/checkoutlist",
    },
    {
      name: "Manage Rooms",
      link: "/frontdesk/managerooms",
    },

    {
      name: "No Shows",
      link: "/frontdesk",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div>
            <h4 className="title-rep">Front Desk</h4>
          </div>
          <hr />
          <div className="row ms-1 g-4 pt-3">
            {menu.map((report) => {
              return (
                <>
                  <div className="col-lg-6  ">
                    <Link to={`${report.link}`}>
                      <div className="con">
                        <h5>{report.name}</h5>
                        <div className="con-icon">
                          <HiOutlineArrowRight />
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontDesk;

import React from "react";
import SideBar from "../../Sidebar/Sidebar";
import TableOccupancy from "./TableOccupency";

function Occupancy() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div>
            <h3 className="titlerep">Occupancy Analysis</h3>
          </div>
          <hr />
          <TableOccupancy />
          {/* {loading ? (
    <Spinner />
  ) : ( */}
          {/* <TableModel /> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default Occupancy;

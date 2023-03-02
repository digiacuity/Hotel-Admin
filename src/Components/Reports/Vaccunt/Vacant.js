import React from "react";
import SideBar from "../../Sidebar/Sidebar";
import TableVacant from "./TableVacant";

function Vacant() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div>
            <h3 className="titlerep">Vacant Report</h3>
          </div>
          <hr />
          <TableVacant />
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

export default Vacant;

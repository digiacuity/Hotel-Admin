import React from "react";
import SideBar from "../../Sidebar/Sidebar";
import TableBalance from "./TableBalance";

function Balance() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div>
            <h3 className="titlerep">Balance Report</h3>
          </div>
          <hr />
          <TableBalance />
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

export default Balance;

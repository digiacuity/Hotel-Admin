import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Reservebook.css";
import Search from "../../Search/Search";

function ReserveBook() {
  return (
    <>
      <Sidebar />

      <div className="container-fluid">
        <div className="col-lg-2"></div>

        <div className="col-lg-10">
          <div className="row">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}
export default ReserveBook;

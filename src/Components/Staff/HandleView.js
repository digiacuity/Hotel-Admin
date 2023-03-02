import React from "react";
import moment from "moment";

function HandleView({ viewStaff }) {
  return (
    <div className="container-fluid ">
      <div className="row g-4 mb-3  ">
        <div className="col-4">
          <div className="p-2 border  text-center">
            <h6>ID</h6>
            <div className="p-2 border text-center">{viewStaff.id}</div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 border  text-center">
            <h6> Employee Name</h6>
            <div className="p-2 border text-center">{viewStaff.name}</div>
          </div>
        </div>

        <div className="col-4">
          <div className="p-2 border text-center">
            <h6>Designation</h6>
            <div className="p-2 border text-center">{viewStaff.department}</div>
          </div>
        </div>

        <div className="col-4">
          <div className="p-2 border text-center">
            <h6>Shift</h6>
            <div className="p-2 border text-center">{viewStaff.shift}</div>
          </div>
        </div>

        <div className="col-4">
          <div className="p-2 border text-center">
            <h6>Joining Date </h6>
            <div className="p-2 border text-center">
              {moment(viewStaff.date).format("DD-MM-YYYY")}
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="p-2 border text-center">
            <h6>Gender</h6>
            <div className="p-2 border text-center">{viewStaff.gender}</div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 border text-center">
            <h6>Date Of Birth</h6>
            <div className="p-2 border text-center">{viewStaff.dob}</div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 border text-center">
            <h6>Email </h6>
            <div className="p-2 border text-center">{viewStaff.email}</div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 border text-center">
            <h6>Contact</h6>
            <div className="p-2 border text-center">{viewStaff.contact}</div>
          </div>
        </div>
        <div className="col-12">
          <div className="p-2 border text-center">
            <h6> Address</h6>
            <div className="p-2 border text-center">{viewStaff.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandleView;

import React from "react";

function RoomView({ view, viewloading }) {
  return (
    <div className="container-fluid ">
      <div className="row g-4 ">
        <div className="col-lg-6">
          <div className="room-lable">Room No</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.roomnumber}</div>
        </div>
        <div className="col-lg-6">
          <div className="room-lable">Floor</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.floor}</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-lable">Room Type</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.roomtype}</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-lable">AC</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.ac}</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-lable">Bed</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.bed}</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-lable">Price</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.price}</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-lable">Room Status</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.roomstatus}</div>
        </div>
        {/* <div className="col-lg-6">
          <div className=" room-lable">Booking Status</div>
        </div>
        <div className="col-lg-6">
          <div className=" room-name">{view.bookingstatus}</div>
        </div> */}
      </div>
    </div>
  );
}

export default RoomView;

import React from "react";

function HandleViewBill({ view }) {
  return (
    <div className="container-fluid ">
      <div className="row g-4 ">
        <div className="col-4">
          <div className="p-3 border text-center">Invoice No</div>

          <div className="p-3 border text-center">{view.invoiceno}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border text-center">Booking No</div>

          <div className="p-3 border text-center">{view.bookingno}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border text-center">Bill Date</div>

          <div className="p-3 border text-center">{view.date}</div>
        </div>

        <div className="col-4">
          <div className="p-3 border text-center">Name</div>

          <div className="p-3 border text-center">{view.name}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border text-center">Email</div>

          <div className="p-3 border text-center">{view.email}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border text-center">Contact</div>

          <div className="p-3 border text-center">{view.contact}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border text-center">Room No</div>

          <div className="p-3 border text-center">{view.roomno}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border text-center">Room Type</div>

          <div className="p-3 border text-center">{view.roomtype}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border text-center">Package</div>

          <div className="p-3 border text-center">{view.package}</div>
        </div>

        <div className="col-6">
          <div className="p-3 border text-center">Check In</div>

          <div className="p-3 border text-center">{view.checkin}</div>
        </div>
        <div className="col-6">
          <div className="p-3 border text-center">Check Out</div>

          <div className="p-3 border text-center">{view.checkout}</div>
        </div>
        <div className="col-6">
          <div className="p-3 border text-center">Price</div>

          <div className="p-3 border text-center">{view.price}</div>
        </div>
        <div className="col-6">
          <div className="p-3 border text-center">Status</div>

          <div className="p-3 border text-center">{view.status}</div>
        </div>
      </div>
    </div>
  );
}

export default HandleViewBill;

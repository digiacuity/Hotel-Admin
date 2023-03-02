import React from "react";
import moment from "moment";

function ReserveviewList({ viewList }) {
  return (
    <div className="container-fluid  ">
      <div className="row gy-4 mb-3 ">
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold"> Reserve No</div>
            <div className="p-2 border text-center">{viewList.bookingno}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold"> Room No</div>
            <div className="p-2 border text-center">{viewList.roomno}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold"> Room Type</div>
            <div className="p-2 border text-center">{viewList.type}</div>
          </div>
        </div>{" "}
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold"> Meal Type</div>
            <div className="p-2 border text-center">{viewList.meal}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">mode</div>
            <div className="p-2 border text-center"> {viewList.mode}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Price</div>
            <div className="p-2 border text-center"> {viewList.price}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Advance</div>
            <div className="p-2 border text-center"> {viewList.advance}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Ac</div>
            <div className="p-2 border text-center"> {viewList.ac}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Bed</div>
            <div className="p-2 border text-center"> {viewList.bed}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">No Of Guest</div>
            <div className="p-2 border text-center">
              {+viewList.adult + +viewList.child}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Check In</div>
            <div className="p-2 border text-center">
              {moment(viewList.checkin).format("DD-MM-YYYY")}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Check Out</div>
            <div className="p-2 border text-center">
              {moment(viewList.checkout).format("DD-MM-YYYY")}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">First Name</div>
            <div className="p-2 border text-center"> {viewList.firstname}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Last Name</div>
            <div className="p-2 border text-center"> {viewList.lastname}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Email</div>
            <div className="p-2 border text-center"> {viewList.email}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Gender</div>
            <div className="p-2 border text-center"> {viewList.gender}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">Contact</div>
            <div className="p-2 border text-center"> {viewList.contact}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">ID Type</div>
            <div className="p-2 border text-center"> {viewList.idtype}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center  ">
            <div className="fw-bold">ID No</div>
            <div className="p-2 border text-center"> {viewList.idno}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center ">
            <div className="fw-bold">Address</div>
            <div className="p-2 border text-center"> {viewList.address}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center ">
            <div className="fw-bold">Note</div>
            <div className="p-2 border text-center"> {viewList.note}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserveviewList;

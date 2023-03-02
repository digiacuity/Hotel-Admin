import React from "react";
import moment from "moment";

function HandleView({ view }) {
  return (
    <div className="container-fluid  ">
      <div className="row gy-4 mb-3 ">
        <div className="col-lg-4">
          <div className="p-2  border">
            <div className="fw-bold"> Booking No</div>
            <div className="p-2 border text-center">{view.bookingno}</div>
          </div>
        </div>
        {/* {view.newroomno && (
          <>
            <div className="col-lg-4">
              <div className="p-2 border ">
                <div className="fw-bold"> New Room No</div>
                <div className="p-2 border text-center">
                  <b>{view.newroomno}</b>
                </div>
              </div>
            </div>
          </>
        )} */}
        {/* <div className="col-lg-4">
          <div className="p-2 border ">
            <div className="fw-bold"> Room No</div>
            <div className="p-2 border text-center">{view.roomno}</div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Room Type</div>
            <div className="p-2 border text-center">{view.type}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> AC</div>
            <div className="p-2 border text-center">{view.ac}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Bed</div>
            <div className="p-2 border text-center">{view.bed}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Mode</div>
            <div className="p-2 border text-center"> {view.mode}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Advance</div>
            <div className="p-2 border text-center"> {view.advance}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> No of Guest</div>
            <div className="p-2 border text-center"> {view.noofguest}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Price</div>
            <div className="p-2 border text-center"> {view.price}</div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Check In</div>
            <div className="p-2 border text-center">
              {moment(view.checkin).format("DD-MM-YYYY")}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Check Out</div>
            <div className="p-2 border text-center">
              {moment(view.checkout).format("DD-MM-YYYY")}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Name</div>
            <div className="p-2 border text-center"> {view.name}</div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Email</div>
            <div className="p-2 border text-center"> {view.email}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Gender</div>
            <div className="p-2 border text-center"> {view.gender}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Contact</div>
            <div className="p-2 border text-center"> {view.contact}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> ID Type</div>
            <div className="p-2 border text-center"> {view.idtype}</div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> ID No</div>
            <div className="p-2 border text-center"> {view.idno}</div>
          </div>
        </div>

        <div className="col-12">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Address</div>
            <div className="p-2 border text-center"> {view.address}</div>
          </div>
        </div> */}
        {/* <div className="col-lg-12">
          <div className="p-2 border  text-center">
            <div className="fw-bold"> Note</div>
            <div className="p-2 border text-center"> {view.note}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HandleView;

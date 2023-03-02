import moment from "moment";
import React from "react";

function HandleView({ viewD }) {
  return (
    <>
      <div className="container-fluid ">
        <div className="row gy-4 mb-3 ">
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Booking No</div>

            <div className="p-2 border text-center">{viewD.bookingno}</div>
          </div>
          {viewD.newroomno && (
            <>
              <div className="col-lg-4">
                <div className="p-2 border text-center fw-bold">
                  New Room No
                </div>

                <div className="p-2 border text-center">{viewD.newroomno}</div>
              </div>
            </>
          )}
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Room No</div>

            <div className="p-2 border text-center">{viewD.roomno}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Room Type</div>

            <div className="p-2 border text-center">{viewD.type}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Meal</div>

            <div className="p-2 border text-center">{viewD.meal}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Mode</div>

            <div className="p-2 border text-center">{viewD.mode}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">AC</div>

            <div className="p-2 border text-center">{viewD.ac}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Bed</div>

            <div className="p-2 border text-center">{viewD.bed}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Advance</div>

            <div className="p-2 border text-center">{viewD.advance}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">No of Guest</div>

            <div className="p-2 border text-center">
              {+viewD.adult + +viewD.child}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Price</div>

            <div className="p-2 border text-center">{viewD.price}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">check In</div>

            <div className="p-2 border text-center">
              {moment(viewD.checkin).format("DD-MM-YYYY / hh:mm a")}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Check Out</div>

            <div className="p-2 border text-center">
              {moment(viewD.checkout).format("DD-MM-YYYY / hh:mm a")}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Name</div>

            <div className="p-2 border text-center">{viewD.firstname}</div>
          </div>

          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Email</div>

            <div className="p-2 border text-center">{viewD.email}</div>
          </div>
          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Gender</div>

            <div className="p-2 border text-center">{viewD.gender}</div>
          </div>

          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Contact</div>

            <div className="p-2 border text-center">{viewD.contact}</div>
          </div>

          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Id Type</div>

            <div className="p-2 border text-center">{viewD.idtype}</div>
          </div>

          <div className="col-lg-4">
            <div className="p-2 border text-center fw-bold">Id No</div>

            <div className="p-2 border text-center ">{viewD.idno}</div>
          </div>
          <div className="col-lg-6">
            <div className="p-2 border text-center fw-bold">Note</div>

            <div className="p-2 border text-center">{viewD.note}</div>
          </div>
          <div className="col-lg-6">
            <div className="p-2 border text-center fw-bold">Address</div>

            <div className="p-2 border text-center">{viewD.address}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HandleView;

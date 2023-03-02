import React from "react";
import "./BookingList.css";

function Checkoutmodal(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container-fluid mb-2 mt-1">
            <div className="row">
              <div className="col-md-12 d-flex align-items-center justify-content-between">
                <div>
                  <p style={{ color: "#7e8d9f", fontsize: "20px" }}>
                    Invoice ID <strong> : #123-123</strong>
                  </p>
                </div>

                <div>
                  <button className="btn btn-primary btn-sm mb-2 me-3">
                    Print
                  </button>
                  <button
                    type="button"
                    className="btn-close  mb-2 ms-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>

              <hr />
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                  <div>
                    <ul className="list-unstyled d-flex flex-column align-items-start justify-content-start">
                      <li className=" p-1">
                        <span className="text-primary">Hotel Name</span>
                      </li>
                      <li className="text-muted  p-1">Street 1</li>
                      <li className="text-muted  p-1">City</li>
                      <li className="text-muted p-1 ">State</li>
                      <li className="text-muted p-1">123-456-7890</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-unstyled ">
                      <li className="text-muted p-1 text-start">
                        <span className="fw-bold">Booking No:</span>#123
                      </li>
                      <li className="text-muted p-1 text-start">
                        <span className="fw-bold">Name:</span>Name
                      </li>
                      <li className="text-muted p-1  text-start ">
                        <span className="fw-bold">Check-in: </span> 23-07-2021
                      </li>
                      <li className="text-muted p-1  text-start">
                        <span className="fw-bold">Check-out: </span> 26-07-2021
                      </li>
                      <li className="text-muted p-1  text-start">
                        <span className="me-1 fw-bold">Status:</span>
                        <span className=" text-light ms-2  border bg-success p-1 ">
                          paid
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row my-3 justify-content-center">
                <table className="table table-striped table-bordered">
                  <thead
                    style={{ backgroundcolor: "#84B0CA " }}
                    className="text-dark"
                  >
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Pro Package</td>
                      <td>3</td>
                      <td>1000</td>
                      <td>3000</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Room Service</td>
                      <td>1</td>
                      <td>200</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Maintanence</td>
                      <td>2</td>
                      <td>100</td>
                      <td>200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-md-11 ms-5 d-flex justify-content-end ">
                  <div>
                    <ul className="list-unstyled ">
                      <li className="text-muted p-2 text-start fs-6">
                        <span className="fw-bolder me-3">Sub Total </span>: 3400
                      </li>
                      <li className="text-muted p-2 text-start fs-6">
                        <span className="fw-bolder me-3 ">Tax (15%) </span>: 510
                      </li>
                      <li className="text-dark p-2  text-start fw-bold fs-6 ">
                        <span className="fw-bold  me-5">Total </span>: 3910
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr />
              <div className="row">
                <div className="col-xl-12 text-center">
                  <p>Thanks for Staying at Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkoutmodal;

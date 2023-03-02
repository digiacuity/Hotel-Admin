import React from "react";

function Bar() {
  let float = [
    {
      name: " Single Room",
      color: " bg-danger",
      value: "60%",
    },
    {
      name: "Double Room",
      value: "40%",
      color: " bg-warning",
    },
    {
      name: " Deluxe Room",
      value: "30%",
      color: " bg-primary",
    },
    {
      name: "Deluxe Room",
      value: "25%",
      color: "  bg-info",
    },
    // {
    //   name: " Spring Package",
    //   value: "15%",
    //   color: " bg-success",
    // },
  ];
  return (
    <div className="bar-con mt-3">
      <div className="bar-head  ">
        <h6>Top Selected Package</h6>
      </div>
      <div className="card-body">
        {float.map((e) => {
          return (
            <>
              <h4 className="small text-uppercase font-weight-bold mt-3">
                {e.name}
                <span className="float-right" key={e.value}>
                  {" "}
                  {e.value}
                </span>
              </h4>
              <div className="progress  mb-5" key={e.color}>
                <div
                  className={`progress-bar progress-bar-striped progress-bar-animated ${e.color}`}
                  role="progressbar"
                  style={{ width: e.value }}
                  aria-valuenow={e.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Bar;

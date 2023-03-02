import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../../../Sidebar/Sidebar";
import TCheckin from "./TCheckin";
import TableModelRep from "./TCheckin";

function CheckinRep() {
  const [cidata, setcidata] = useState([]);
  const [loading, setloading] = useState(false);
  async function fetchAll() {
    setloading(true);
    try {
      let Data = await axios.get("https://api-digi.onrender.com/checkins");
      setloading(false);
      setcidata(Data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAll();
  }, []);
  let ciColumns = [
    {
      id: "Booking No",
      label: "Booking No",
      minWidth: 60,
    },
    {
      id: "Room No",
      label: "Room No",
      minWidth: 60,
    },

    {
      id: "checkin ",
      label: "checkin",
      minWidth: 60,
    },
    {
      id: "checkout ",
      label: "checkout",
      minWidth: 60,
    },
    {
      id: "Name",
      label: "Name",
      minWidth: 140,
    },
    {
      id: "Mode",
      label: "Mode",
      minWidth: 140,
    },

    {
      id: "Guest",
      label: `Guest
       
          `,
      minWidth: 100,
    },
    {
      id: "Price",
      label: "Price",
      minWidth: 140,
    },
    {
      id: "Advance",
      label: "Advance",
      minWidth: 140,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div>
            <h3 className="ci-rep">Checkin Report</h3>
          </div>
          <hr />
          <TCheckin columns={ciColumns} value={cidata} load={loading} />
        </div>
      </div>
    </div>
  );
}

export default CheckinRep;

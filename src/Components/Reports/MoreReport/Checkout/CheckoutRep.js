import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../../../Sidebar/Sidebar";
import TableModelRep from "../Checkin/TCheckin";
import TCheckout from "./TCheckout";

function CheckoutRep() {
  const [cdata, setcdata] = useState([]);
  const [loading, setloading] = useState(false);
  async function fetchAll() {
    setloading(true);
    try {
      let Data = await axios.get("https://api-digi.onrender.com/checkouts", {
        headers: {
          Authorization: window.localStorage.getItem("myapptoken"),
        },
      });
      setloading(false);
      setcdata(Data.data);
    } catch (error) {}
  }

  let ciColumns = [
    // { id: "no", label: "No", minWidth: 50 },
    {
      id: "Room No",
      label: "Room No",
      minWidth: 20,
    },
    {
      id: "checkout",
      label: "checkout",
      minWidth: 80,
    },

    {
      id: "Arraival Mode",
      label: "Arraival Mode",
      minWidth: 20,
    },
    {
      id: "Guest Name",
      label: "Guest Name",
      minWidth: 80,
    },
    {
      id: "Booking Id",
      label: "Booking Id",
      minWidth: 20,
    },
    {
      id: "No Of Guest",
      // label: `Guest
      //     (Adult & Children)
      //     `,
      label: "No Of Guest",
      minWidth: 80,
    },
    {
      id: "Tariff",
      label: "Tariff",
      minWidth: 80,
    },
    {
      id: "Advance",
      label: "Advance",
      minWidth: 80,
    },

    {
      id: "Checkin",
      label: "Checkin",
      minWidth: 80,
    },
    {
      id: "Bill  & Mode",
      label: "bill  & Mode",
      minWidth: 80,
    },
  ];
  // let value = [
  //   {
  //     no: "1",
  //     bookingno: "1101",
  //     roomno: "101",
  //     checkin: "21-11-2022 12-05",
  //     name: "name",
  //     mode: "walkin",
  //     guest: " 2 & 1",
  //     total: "3",
  //     tariff: "1000",
  //     checkout: "24-1-2022 13-15",
  //     bill: "online",
  //     nodays: "3",

  //     remark: "-",
  //   },
  // ];
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div>
            <h3 className="ci-rep">Checkout Report</h3>
          </div>
          <hr />
          <TCheckout columns={ciColumns} value={cdata} load={loading} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutRep;

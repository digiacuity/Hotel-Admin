import Chart from "./Chart";
import Featured from "./Featured";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Calendar from "react-calendar";
import Card from "./Card";
import Bar from "./Bar";
import "./dashboard.css";
import { useState } from "react";

function Dashboard() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-lg-2 ps-0">
            <Sidebar />
          </div>
          <div className="col-lg-10 ps-4">
            <div className="row ">
              <Topbar />
              <Card />

              <div className="col-lg-4 col-md-6">
                <Calendar onChange={onChange} value={value} />
              </div>
              <div className="col-lg-8 col-md-6 chart-con ">
                <Chart />
              </div>
              <div className="col-lg-4 col-md-6">
                <Featured />
              </div>
              <div className="col-lg-8 col-md-12">
                <Bar />
              </div>

              <div className="col-lg-12 p-0 m-0">
                <div className="footer ">
                  <div>
                    <p>
                      Copyright © {new Date().getFullYear()}
                      <a
                        href="https://digiacuity.com/"
                        target="_blank"
                        className=" digi  ms-2"
                        rel="noreferrer"
                      >
                        Digiacuity
                      </a>
                      . All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

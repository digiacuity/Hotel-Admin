import React from "react";
import SideBar from "../../Sidebar/Sidebar";
import "./More.css";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
function MoreReport() {
  let reports = [
    {
      name: "Day Settlement",
      link: "/report/daysettle",
    },
    {
      name: "vacant report",
      link: "/report/vacant",
    },
    {
      name: "balance report",
      link: "/report/balance",
    },
    {
      name: "occupancy Analysis",
      link: "/report/occupancy",
    },
    {
      name: "checkin report",
      link: "/report/more/checkin",
    },
    {
      name: "checkout report",
      link: "/report/more/checkout",
    },
    {
      name: "tariff report",
      link: "/report/more/tariff",
    },
    {
      name: "police report",
      link: "/report/more/police",
    },
    {
      name: "news paper report",
      link: "/report/more/newspaper",
    },
    {
      name: "Daily status report",
      link: "/report/more/daily-status",
    },
    {
      name: "roomwise sales report",
      link: "/report/more/roomwise-sales",
    },
    {
      name: "business analysis report",
      link: "/report/more/business-analysis",
    },
    {
      name: "collection report",
      link: "/report/more/collection",
    },
    {
      name: "revenue report",
      link: "/report/more/revenue",
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
            <h4 className="title-rep">Reports</h4>
          </div>
          <hr />
          <div className="row ms-1 g-4 pt-2">
            {reports.map((report) => {
              return (
                <>
                  <div className="col-lg-6  ">
                    <Link to={`${report.link}`}>
                      <div className="con">
                        <h5>{report.name}</h5>
                        <div className="con-icon">
                          <HiOutlineArrowRight />
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreReport;

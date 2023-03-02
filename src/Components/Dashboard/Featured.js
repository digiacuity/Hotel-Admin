import "./dashboard.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured mt-3">
      <div className="feature-head">
        <h6>Rooms Availability</h6>
      </div>
      <div className="feature-data">
        <div className="featuredChart">
          <CircularProgressbar value={100} text={"0%"} strokeWidth={8} />
        </div>

        <h5 className="title mt-3">Total sales made today</h5>
        <p className="amount"> ₹ 0</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary d-flex">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <div className="resultAmount "> ₹ 0</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <div className="resultAmount">₹ 0</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">₹ 0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import SideBar from "../../Sidebar/Sidebar";
import { useFormik } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Addrooms() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      roomnumber: "",
      roomtype: "",
      ac: "",
      bed: "",
      price: "",
      floor: "",
      roomstatus: "Available",
      bookingstatus: "Available",
    },
    onSubmit: async (values) => {
      try {
        await axios.post("https://api-digi.onrender.com/room", values, {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        });
        swal(" Room Added Successfully", {
          icon: "success",
          timer: 3000,
        });

        navigate("/frontdesk/roomlist");
      } catch (error) {
        console.log("Room added error" + error);
      }
    },
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 p-0">
            <SideBar />
          </div>

          <div className="col-lg-10 ">
            <h3 className="mt-1  ms-2 pt-2">ADD ROOM</h3>
            <hr />

            <form onSubmit={formik.handleSubmit}>
              <div className="row mt-lg-3 g-4 ms-md-0 ">
                <div className="col-lg-6 col-md-6  ">
                  <label className="form-label">Floor</label>

                  <select
                    onChange={formik.handleChange}
                    value={formik.values.floor}
                    className="form-select"
                    name="floor"
                    id="floor"
                    aria-label="Default select example"
                  >
                    <option selected>-select-</option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                    <option value="Fifth">Fifth</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6  ">
                  <label className="form-label">Room No</label>

                  <input
                    type="text"
                    name="roomnumber"
                    id="roomnumber"
                    onChange={formik.handleChange}
                    value={formik.values.roomnumber}
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6  ">
                  <label className="form-label">Room type</label>

                  <select
                    onChange={formik.handleChange}
                    value={formik.values.roomtype}
                    className="form-select"
                    name="roomtype"
                    id="roomtype"
                    aria-label="Default select example"
                  >
                    <option selected>-select-</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Super Deluxe">Super Deluxe</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-6  ">
                  <label className="col-form-label">AC</label>

                  <select
                    onChange={formik.handleChange}
                    value={formik.values.ac}
                    className="form-select"
                    name="ac"
                    id="ac"
                    aria-label="Default select example"
                  >
                    <option selected>-select-</option>
                    <option value="AC">AC</option>
                    <option value="Non-AC">Non-AC</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-6  ">
                  <label className="form-label mb-2">Bed</label>

                  <select
                    onChange={formik.handleChange}
                    value={formik.values.bed}
                    className="form-select"
                    name="bed"
                    id="bed"
                    aria-label="Default select example"
                  >
                    <option selected>-select-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-6  ">
                  <label className="col-form-label">Price</label>

                  <input
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    className="form-control"
                    name="price"
                    id="price"
                    min="500"
                    type="number"
                  />
                </div>

                <div className="row">
                  <div className="col-lg-12 text-center mt-5">
                    <button
                      type="submit"
                      className=" ms-5 btn btn-primary gap-2"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning gap-2 mx-5"
                      onClick={() => navigate("/roomlist")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addrooms;

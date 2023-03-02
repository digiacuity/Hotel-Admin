import React from "react";
import "./Pages.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let user = { Firstname: "user", email: "user@gmail.com" };
  return (
    <div className="profile-container">
      <IoMdArrowRoundBack
        className="profile-back-icon fs-1 "
        onClick={() => navigate(-1)}
      />

      <div className="cover-pic ">
        <img
          className="user-pic "
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="user-pic"
        />
      </div>
      <div className="user-detail text-center">
        <h4 className="  mt-3">
          <b className="me-2">Name :</b> {user.Firstname}
        </h4>
        <h4 className=" mt-3">
          <b className="me-2">Email :</b>
          {user.email}
        </h4>
      </div>
    </div>
  );
}

export default Profile;

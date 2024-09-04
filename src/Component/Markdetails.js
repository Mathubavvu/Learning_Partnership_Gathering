import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Markdetails = () => {
  return (
    <div>

      <div className="admin-cont ">
        <div className="profilecontainer ">
        <div className="mark-items sem1">
          <br></br>
          <br></br>
          <h2>
            <strong>SEMESTER 1</strong>
          </h2>
          <br></br>
          <label for="ms1">GPA:</label>
          &emsp;
          
          <label id="ms1">82.0</label>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem2">
          <h2>
            <strong>SEMESTER 2</strong>
          </h2>
          <br></br>
          <label for="ms2">GPA: </label>
          &emsp;
          <label id="ms2">NIL</label>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem3">
          <h2>
            <strong>SEMESTER 3</strong>
          </h2>
          <br></br>
          <label for="ms3">GPA: </label>
          &emsp;
          <label id="ms3">NIL</label>

          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem4">
          <h2>
            <strong>SEMESTER 4</strong>
          </h2>
          <br></br>
          <label for="ms4">GPA: </label>
          &emsp;
          <label id="ms4">NIL</label>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="mark-items sem5">
          <h2>
            <strong>SEMESTER 5</strong>
          </h2>
          <br></br>
          <label for="ms5">GPA: </label>
          &emsp;
          <label id="ms5">NIL</label>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
      </div>
      <Outlet />
    </div>
    </div>
  );
};

export default Markdetails;

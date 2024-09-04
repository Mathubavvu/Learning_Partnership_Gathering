import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacDisplayprofile = () => {
  const [post, setPost] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:3001/fac`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    <div className="bio-container">
      <h1>Profile </h1><br /><br />
      {post.map(facultyy => (
        <div key={facultyy.id} className="profile">
          <label>Name : {facultyy.facname}</label><br></br><br></br>
          <label>Department :  {facultyy.facDept}</label><br></br><br></br>
          <label>Designation : {facultyy.facdes}</label><br></br><br></br>
          <label>Gender : {facultyy.facGender}</label><br></br><br></br>
          <label>Phone Number: {facultyy.facPhno}</label><br></br><br></br>
          <label>Address: {facultyy.facAddr}</label><br></br><br></br>
          <label>Blood Group: {facultyy.facbloodgrp}</label><br></br><br></br>
          <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
        </div>
      ))}
     
    </div>
  </div>
);
}

export default FacDisplayprofile;


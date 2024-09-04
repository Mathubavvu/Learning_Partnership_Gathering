import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
   const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/stud`)
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
      <h1>BIO DATA</h1><br />
      {post.map(student => (
        <div key={student.id} className="profile">
          <label>Name: {student.name}</label><br></br><br></br>
          <label>Roll No: {student.rollno}</label><br></br><br></br>
          <label>Date of Birth: {student.dob}</label><br></br><br></br>
          <label>Department: {student.dept}</label><br></br><br></br>
          <label>Current Semester: {student.cursem}</label><br></br><br></br>
          <label>Current Year: {student.curyr}</label><br></br><br></br>
          <label>Phone Number: {student.phno}</label><br></br><br></br>
          <label>Email-Id: {student.email}</label><br></br><br></br>
          <label>Address: {student.addr}</label><br></br><br></br>
          <label>Blood Group: {student.bloodgrp}</label><br></br><br></br>
          
        </div>
      ))}
    </div>
  </div>
);
}

export default Profile;


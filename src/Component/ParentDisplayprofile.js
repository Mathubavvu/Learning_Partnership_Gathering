import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ParentDisplayprofile = () => {
  const [post,setPost]=useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/par`)
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
      <h1>Profile</h1><br /><br />
      {post.map(x => (
        <div key={x.id} className="profile">
          <label>Name: {x.name}</label><br></br><br></br>
         
          <label>Phone Number: {x.phno}</label><br></br><br></br>
          <label>Address: {x.addr}</label><br></br><br></br>
          <label>Blood Group: {x.bloodgrp}</label><br></br><br></br>
          <br></br><br></br><br></br><br></br> 
        </div>        
      ))}
       <br></br><br></br><br></br><br></br>  <br></br><br></br><br></br><br></br> 
    </div>
  </div>
);
}

export default ParentDisplayprofile;


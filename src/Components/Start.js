import React from 'react';
import { Link } from 'react-router-dom';
const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="topnav">
      <Link className="navbar" to="/"></Link>
      </div>
      <div className="card-content">
        <div className="content">
          <h1 className='text_conntainer1'>Welcome to My Quize App</h1>
          <h1 className='text_container'>Start the quiz</h1>
          <p className='text1'>Good luck!</p>
          <button className="button_info" onClick={onQuizStart}>Start</button>

        </div>
      </div>
    </div>
  );
}

export default Start;
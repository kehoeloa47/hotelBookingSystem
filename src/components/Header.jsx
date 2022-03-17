import React from 'react';
import '../App.css';
import { SiHotelsdotcom } from "react-icons/si";

function Header() {
  return (
    <div className='App-header'>
      <SiHotelsdotcom size={42}/>
      <h1>Booking System</h1>
    </div>
  )
}

export default Header;
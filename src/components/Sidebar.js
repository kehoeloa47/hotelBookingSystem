import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


function Sidebar(){
    return(
        <div className='Sidebar'>
            <ul>
                <Link to='/'>
                <li className='SideBar-links'>Home</li>
                </Link>
                <Link to='/AddBooking'>
                <li className='SideBar-links'>Add Booking</li>
                </Link>
                <Link to='CheckRoomAvailability'>
                <li className='SideBar-links'>Check Room</li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;
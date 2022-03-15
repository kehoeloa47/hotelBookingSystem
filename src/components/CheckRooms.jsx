import DatePicker from '@mui/lab/DatePicker';
import { MenuItem, Select } from '@mui/material';
import React from 'react';
import {TextField} from '@mui/material';
import {useState, useEffect} from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../store/reducers/bookingsReducer';
import {TiTickOutline, TiTimesOutline} from "react-icons/ti";

const CheckRooms = () => {
    const [date, setDate] = useState(new Date());
    const [room, setRoom] = useState(101);
    const [roomIsAvailable, setRoomIsAvailable] = useState(false);

    const bookings = useSelector((state) => state.bookings);    
    const dispatch = useDispatch();

const handleCheckAvailability= (event) => {
    event.preventDefault();
        console.log(date.toLocaleDateString())
        console.log(room)

        if(bookings.bookings.some(obj => obj.room == room && obj.date == date.toLocaleDateString())){
            setRoomIsAvailable(false);
        }
        else{
            setRoomIsAvailable(true);
        }
        console.log(roomIsAvailable);
}

useEffect(() => {
    getBookings()
    console.log(date);
}, []);

const getBookings = () => {
    dispatch(fetchBookings())
}

    return(
        <form>
            <div className='form-group'>
                <h2>Check room</h2>
                <hr/>
            </div>
            <div className='form-group'>
                <label>Room</label>
                <Select
                    onChange={(event) => setRoom(event.target.value)}
                    label="Select a room"
                    value={room}
                    name="room"
                    autoWidth
                >
                    <MenuItem value={101}>101</MenuItem>
                    <MenuItem value={102}>102</MenuItem>
                    <MenuItem value={103}>103</MenuItem>
                </Select>
            </div>
            <div className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Pick a date"
                        inputFormat="dd/MM/yyyy"
                        value={date}
                        name="date"
                        onChange={(newDate) => setDate(newDate)}
                        renderInput={(props) => <TextField {...props} />}
                    />
                </LocalizationProvider>
            </div>
            <button 
                type='submit' 
                onClick={handleCheckAvailability}
                >
                Check
            </button>
            <div className="form-group">
                {roomIsAvailable ? (<TiTickOutline />) : (<TiTimesOutline />)}
            </div>
        </form>
    )
}

export default CheckRooms;


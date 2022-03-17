import React from 'react';
import DatePicker from '@mui/lab/DatePicker';
import { MenuItem, Select } from '@mui/material';
import {TextField} from '@mui/material';
import {useState, useEffect} from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../store/reducers/bookingsReducer';
import {TiTickOutline, TiTimesOutline} from "react-icons/ti";
import Button from './Button';


const CheckRoomAvailability = () => {
  const [date, setDate] = useState(new Date());
  const [room, setRoom] = useState("");
  const [roomIsAvailable, setRoomIsAvailable] = useState(false);

  const bookings = useSelector((state) => state.bookings);    
    const dispatch = useDispatch();

const handleCheckAvailability= (event) => {
    event.preventDefault();  
    
        if(bookings.some(obj => obj.room == room && obj.date == date.toLocaleDateString())){
            setRoomIsAvailable(false);
        }
        else{
            setRoomIsAvailable(true);
        }
}

useEffect(() => {
    getBookings();
}, []);

const getBookings = () => {
    dispatch(fetchBookings());
}

  return(
    <div className="container">
      <form>
        <h3>Check Room</h3>
        <hr/>
        <ul className="flex-outer">
          <li>
            <label>Room</label>
            <div className="option">
              <Select
                    id="select-mui"
                    onChange={(event) => setRoom(event.target.value)}
                    label="Select a room"
                    labelId="select-room"
                    value={room}
                    fullWidth
                >
                  <MenuItem value="none" disabled>
                    Select a room
                  </MenuItem>
                    <MenuItem value={101}>101</MenuItem>
                    <MenuItem value={102}>102</MenuItem>
                    <MenuItem value={103}>103</MenuItem>
                </Select>
            </div>
          </li>
          <li>
            <label>Date</label>
            <div className="option">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                          label="Pick a date"
                          inputFormat="dd/MM/yyyy"
                          value={date}
                          name="date"
                          onChange={(newDate) => setDate(newDate)}
                          renderInput={(props) => <TextField {...props} />}
                          fullWidth
                      />
                  </LocalizationProvider>
            </div>
          </li>          
          <li>
            <Button
              label='Check'
              type='submit'
              onClick={handleCheckAvailability}
              className="btn btn-primary"
            />
            {roomIsAvailable ? (<TiTickOutline size={42} />) : (<TiTimesOutline size={42} />)}
          </li>
        </ul>
      </form>
    </div>
  )
}

export default CheckRoomAvailability;
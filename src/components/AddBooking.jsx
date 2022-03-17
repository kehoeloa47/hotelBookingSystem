import React from 'react';
import {useState, useEffect} from 'react';
import DatePicker from '@mui/lab/DatePicker';
import {Select, MenuItem, TextField} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useDispatch } from 'react-redux';
import { addBooking } from '../store/reducers/bookingsReducer';
import { fetchBookings } from '../store/reducers/bookingsReducer';
import Button from './Button';

const AddBooking = () => {
  const [date, setDate] = useState(new Date());
  const [room, setRoom] = useState("");
  const [booking, setBooking] = useState({
      surname: "",
      room: "",
      date: new Date()
  });

  useEffect(() => {
      getBookings();
  }, []);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
      e.preventDefault();

      dispatch(addBooking(booking));

      setBooking({
          surname: "",
          room: "",
          date: new Date()
      })
  } 

  const getBookings = () => {
      dispatch(fetchBookings());
  }

  return(
      <div className="container">
        <form>
          <h3>Add Booking</h3>
          <hr/>
          <ul className="flex-outer">
            <li>
                <label>Surname</label>
                <TextField 
                      className='form-control'
                      type='text'
                      placeholder='Surname'
                      onChange={(e) => {setBooking({...booking, surname: e.target.value})}}
                />
            </li>
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
                label='Add'
                type='submit'
                onClick={onSubmit}
                className="btn btn-primary"
              />
            </li>
          </ul>
        </form>
      </div>
    )
}

export default AddBooking;
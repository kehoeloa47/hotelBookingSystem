import {useState, useEffect} from 'react';
import DatePicker from '@mui/lab/DatePicker';
import {TextField, Select, MenuItem} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../store/reducers/bookingsReducer';

const AddBooking = () => {
    const [date, setDate] = useState(new Date());
    const [room, setRoom] = useState(101);
    const [surname, setSurname] = useState('');

    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault();


        dispatch(addBooking(e.target.value))

        setSurname('');
        setDate('');
    } 

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleRoomChange = (e) => {
        setRoom(e.target.value);
    }

    const handleNameChange = (e) => {
        setSurname(e.target.value);
    }

    return(
        <form>
            <div className='form-control'>
                <h2>Add Booking</h2>
                <hr/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                    Surname
                </label>                
                <input 
                    className='form-control'
                    type='text'
                    placeholder='Surname'
                    onChange={handleNameChange}
                    />
            </div>
            <div className='form-control'>
                <label className="form-label">Room</label>
                <Select
                label="Select a room"
                onChange={handleRoomChange}
                value={room}
                >
                    <MenuItem value={101}>101</MenuItem>
                    <MenuItem value={102}>102</MenuItem>
                    <MenuItem value={103}>103</MenuItem>
                </Select>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={date}
                    onChange={date => handleDateChange(date)}
                    renderInput={(props) => <TextField {...props}
                />}
            />
            </LocalizationProvider>
            <button onClick={onSubmit}>
                Add
            </button>
        </form>
    )
}

export default AddBooking;
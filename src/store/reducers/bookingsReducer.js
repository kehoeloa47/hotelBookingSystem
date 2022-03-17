import { CREATE_BOOKING, SET_BOOKINGS, setBookings, createBooking } from '../actions/bookingActions'

const initState = [];

const baseApiAddress = "http://localhost:5000/bookings";

export const bookingReducers = (state = initState, action) =>{
    switch(action.type){
        case CREATE_BOOKING: 
        if(!state.bookings.includes(action.payload))
            state.bookings.push(action.payload);        
        case SET_BOOKINGS: 
            return action.payload;
        default: return state;
    }
}

export const fetchBookings = () => async (dispatch, getState) => {
    const bookings = await fetch(baseApiAddress)
        .then(response => response.json());
    dispatch(setBookings(bookings));
}

export const addBooking = (newBooking) => async (dispatch, getState) => {
    await fetch(baseApiAddress, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newBooking)
    })
    alert("Saved")
    dispatch(createBooking(newBooking));
}

export default bookingReducers;
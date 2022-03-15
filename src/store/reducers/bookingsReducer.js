import { ADD_BOOKING, SET_BOOKINGS, setBookings } from '../actions/bookingActions'

const initState = {
    bookings: []
}

const baseApiAddress = "http://localhost:5000/bookings";

export const bookingReducers = (state = initState, action) =>{
    switch(action.type){
        case ADD_BOOKING: 
            return {...state, bookings: [...state.bookings, action.payload]}        
        case SET_BOOKINGS: 
            return {...state, bookings: action.payload}
        default: return state;
    }
}

export const fetchBookings = () => async (dispatch, getState) => {
    const bookings = await fetch(baseApiAddress)
        .then(response => response.json());
    dispatch(setBookings(bookings));
}

export const addBooking = () => async (dispatch, getState) => {
    const bookings = getState().bookings;
    await fetch(baseApiAddress, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(bookings)
    })
    alert("Saved")
}

export default bookingReducers;
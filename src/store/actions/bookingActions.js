//Constants
export const SET_BOOKINGS = "SET_BOOKINGS";
export const ADD_BOOKING = "ADD_BOOKING";


export const addBooking = (booking) => {
    return{
            type: ADD_BOOKING,
            payload: booking
        }
}

export const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    payload: bookings
})
//Constants
export const SET_BOOKINGS = "SET_BOOKINGS";
export const CREATE_BOOKING = "CREATE_BOOKING";


export const createBooking = (booking) => {
    return{
            type: CREATE_BOOKING,
            payload: booking
        }
}

export const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    payload: bookings
})
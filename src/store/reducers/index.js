import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';

const reducers = combineReducers({ bookings: bookingsReducer });

export default reducers;
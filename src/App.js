import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AddBooking from './components/AddBooking';
import CheckRoomAvailability from './components/CheckRoomAvailability';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
        <Router>
          <Header/>
          <Sidebar/>
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/AddBooking' element={<AddBooking/>}/>
              <Route path='/CheckRoomAvailability' element={<CheckRoomAvailability/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

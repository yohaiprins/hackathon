import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import LogIn from './Pages/login/Login';
import Contacts from './Pages/contacts/Contacts';
import Benifits from './Pages/benifits/Benifits';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Profile from './Pages/Profile/Profile';





function App() {


    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Benifits" element={<Benifits />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </div>
      </>
    );
  }


export default App;

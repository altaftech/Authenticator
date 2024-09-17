import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Changepassword from './Changepassword';
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/changepassword" element={<Changepassword />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
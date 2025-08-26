import React,{useContext, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/appointment";
import About from "./pages/about";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import { Context } from "./main";
import axios from "axios";
import Footer from './components/Footer'
const App = () => {
  const {isAuthenticated , setisAuthenticated ,user, setUser} = useContext(Context);

  useEffect(()=>{
    const fetchUser = async() =>{
      try {
        const response = await axios.get('http://localhost:8086/api/v1/user/patient/me',{withCredentials:true})
        setisAuthenticated(true)
        setUser(response.data.user)

      } catch (error) {
        setisAuthenticated(false);
        setUser({});
      }
      
    }
    fetchUser();
  },[isAuthenticated])

  return (
    <>
      <Router>
       < Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <ToastContainer position="top-center"/>
        <Footer/>
      </Router>
    </>
  );
};

export default App;

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main'; // ✅ named import
import axios from 'axios';
import { toast } from 'react-toastify';
import '../App.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(Context); 

  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8086/api/v1/user/Patient/Logout',
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message);
      setisAuthenticated(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
      setisAuthenticated(true);
    }
  };

  return (
    <div className="container nav">
      <div className="logo"><img src="/logo.png" alt="img" className='logo-img' /></div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/about">About Us</Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutbtn btn " onClick={handleLogout}>Logout</button>
        ) : (
          <button className="loginbtn btn" onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
      <div className="hamburger" onClick={() => setshow(!show)}>
          <GiHamburgerMenu />
        </div>
    </div>
  );
};

export default Navbar;

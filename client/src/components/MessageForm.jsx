import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MessageForm = () => {

  const [fullname, setfullname]=useState("");
  const [Lastname ,setLastname]=useState("");
  const [Email,setEmail]=useState("");
  const [Phone,setPhone]=useState("");
  const [Message,setMessage]=useState("");

  const handleform = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8086/api/v1/message/send',{fullname,Lastname,Email,Phone,Message},{withCredentials:true,headers:{
        "Content-Type":"application/json",
      }}).then((res)=>{
        toast.success(res.data.message);
        setfullname("")
        setLastname("")
        setEmail("")
        setPhone("")
        setMessage("")
      })
    } catch (error) {
      toast.error(error.response.data.message)
    }

  };
  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>
     <form onSubmit={handleform}>
  <div className="form">
    <input
      type="text"
      value={fullname}
      placeholder="Full Name"
      onChange={(e) => setfullname(e.target.value)}
    />

    <input
      type="text"
      value={Lastname}
      placeholder="Last Name"
      onChange={(e) => setLastname(e.target.value)}
    />

    <input
      type="text"
      value={Email}
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="number"
      value={Phone}
      placeholder="Phone"
      onChange={(e) => setPhone(e.target.value)}
    />

   <div>
     <textarea
      rows={4}
      value={Message}
      placeholder="Message"
      onChange={(e) => setMessage(e.target.value)}
    />
   </div>
    <div style={{justifyContent:'center',alignItems:'center'}}>
      <button type="submit" style={{cursor:'pointer'}}>Submit</button>
    </div>
  </div>
</form>


    </div>
  );
};

export default MessageForm;

import React,{ useContext, useState} from 'react'
import { Context } from '../main'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const {isAuthenticated,setisAuthenticated} =useContext(Context);
//State
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, SetConfirmPassword] =useState('');
//Navigation
  const Navigate = useNavigate();
  
  if(isAuthenticated){
    return(<Navigate to={'/'} />)
  }
  const handleForm = async(e)=>{
  e.preventDefault();

   try {
        await axios.post('http://localhost:8086/api/v1/user/patient/Login',{email,password,confirmPassword,role:"patient"},{withCredentials:true,headers:{
          "Content-Type":"application/json",
        }}).then((res)=>{
          toast.success(res.data.message);
          Navigate('/')
          setisAuthenticated(true)
          setEmail("")
          setPassword("")
          SetConfirmPassword("")
        })
      } catch (error) {
        toast.error(error.response.data.message)
      }

  }

  return (
    <div className='container form-component login-form' style={{marginTop:"25px"}}>
      <h2>Sign In</h2>
      <p>Please Login To Continue.....</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis laboriosam molestias fuga hic molestiae.</p>
      <form onSubmit={handleForm}>
        <input type="text" value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required />
        <input type="password" value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required />
        <input type="password" value={confirmPassword} placeholder='confirmPassword' onChange={(e)=>{SetConfirmPassword(e.target.value)}} required />
      
       <div style={{gap:'20px',justifyContent:"flex-end",flexDirection:'row'}}>
        <p style={{marginBottom:0}}>Not Register ?</p>
        <Link to={'/register'} style={{textDecoration:"none",alignItems:"center"}}>Register Now</Link>
       </div>
       <div className='' style={{gap:'10px',justifyContent:"flex-end",flexDirection:'row'}}>
        <button type='submit' style={{cursor:'pointer' ,fontSize:'14px'}}>Login</button>
       </div>
      </form>
    </div>
  )
}

export default Login
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentForm = () => {
   const [firstname, setFirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [nic, setnic] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setgender] = useState("");
    const [AppointmentDate, setAppointmentDate] = useState("");
    const [Department,setDepartment] = useState("")
    const [DoctorFirstName,setDoctorFirstName] = useState("")
    const [DoctorLastName,setDoctorLastName] = useState("")
    const [address , setaddress] = useState("")
    const [hasvisited , sethasvisited] = useState("")
    
    const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const [doctors,setdoctors] = useState([])
  const NavigateTo = useNavigate()

 const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(()=>{
    const fetchData = async()=>{
      const {data} =await axios.get('http://localhost:8086/api/v1/user/doctors',{withCredentials:true});
      setdoctors(data.doctors)
      console.log("doctors from db",data)
    }
    fetchData()
  },[])

  const handleAppointment = async (e)=>{
   e.preventDefault();
   const hasvisitedBool = Boolean(hasvisited);
  try {
     const {data} = await axios.post('http://localhost:8086/api/v1/appointment/post',{firstname,lastname,email,phone,nic,dob,gender,appointment_date:AppointmentDate,Department,doctor_firstname: DoctorFirstName,doctor_lastname: DoctorLastName,hasvisited : hasvisitedBool,address}, {withCredentials:true,headers:{"Content-Type":"application/json",}})
     toast.success(data.message)
     NavigateTo('/')
  } catch (error) {
    toast.error(error.response.data.message) 
  }
  }


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        marginTop: "40px",
        width:"90%"
      }}
    >
      <div
        style={{
          background:"0 4px 15px rgba(0,0,3)",
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
           // reduce this value to make it smaller
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Appointment</h2>
        <form
          onSubmit={handleAppointment}
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)} minLength={3} 
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setnic(e.target.value)}
            style={inputStyle}
          />
          <input
            type="date"
            placeholder='date of birth'
            value={dob}
            onChange={(e) => setdob(e.target.value)}
            style={inputStyle}
          />
          <select
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
             <input
            type="date"
            placeholder="Appointment Date"
            value={AppointmentDate}  min={getToday()}
            onChange={(e) => {
              setAppointmentDate(e.target.value)
              setDoctorFirstName("")
              setDoctorLastName("")
            }}
            style={inputStyle}
          />
       <select
  value={Department}
  style={inputStyle}
  onChange={(e) => {
    setDepartment(e.target.value);
  }}
>
  {departmentsArray.map((depart, index) => {
    return (
      <option value={depart} key={index}>
        {depart}
      </option>
    );
  })}
</select>

<select
  style={inputStyle}
  value={
    DoctorFirstName && DoctorLastName
      ? `${DoctorFirstName}, ${DoctorLastName}` // space after comma matches option
      : ""
  }
  onChange={(e) => {
    const [firstname, lastname] = e.target.value
      .split(",")
      .map((v) => v.trim()); // trim spaces
    setDoctorFirstName(firstname || "");
    setDoctorLastName(lastname || "");
    // disabled(!Department)  ← yeh tab hi rakho jab tumhara disabled ek state setter ho
  }}
>
  <option value="">Select Doctor</option>
  {doctors
    .filter((doctor) => doctor.doctorDepartment === Department)
    .map((doctor, index) => {
      return (
        <option
          value={`${doctor.firstname}, ${doctor.lastname}`} // space matches above
          key={index}
        >
          {doctor.firstname} {doctor.lastname}
        </option>
      );
    })}
</select>


          <textarea placeholder="Address" rows={10} style={inputStyle} onChange={(e)=>setaddress(e.target.value)}></textarea>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              fontSize: "14px",
            }}
          >
            <h5 style={{ marginBottom: 0 ,fontSize:'15px' , }}>Have You visited Already?</h5>
            <input type="checkbox" value={hasvisited} onChange={(e)=>{
              sethasvisited(e.target.checked)
            }}/>
          </div>

          <button className='appointmentbtn'
            type="submit"
            style={{
              background: "#007bff",
              color: "white",
              padding: "12px",
              fontSize: "15px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
           Set Appointment
          </button>
        </form>
      </div>
    </div>
  )
}
const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
};

export default AppointmentForm
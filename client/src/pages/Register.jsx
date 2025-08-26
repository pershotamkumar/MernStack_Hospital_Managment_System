import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(Context);

  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [nic, setnic] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [password, setpassword] = useState("");


 console.log(firstname,lastname,email,phone,nic,dob,gender,password)
  const Navigate = useNavigate();

  if (isAuthenticated) {
    Navigate("/");
  }
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          "http://localhost:8086/api/v1/user/patient/Register",
          {
            firstname,
            lastname,
            email,
            phone,
            nic,
            dob,
            gender,
            password
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(() => {
            Navigate("/");
          }, 5000);

          setisAuthenticated(true);
          setFirstname("");
          setlastname("");
          setemail("");
          setphone("");
          setnic("");
          setdob("");
          setgender("");
          setpassword("");
        });
    } catch (error) {
      // setFirstname("");
      // setlastname("");
      // setemail("");
      // setphone("");
      // setnic("");
      // setdob("");
      // setgender("");
      // setpassword("");
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
           // reduce this value to make it smaller
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Sign Up</h2>
        <p style={{ color: "gray", textAlign: "center", marginBottom: "10px" }}>
          Sign up to continue...
        </p>
        <p
          style={{
            color: "#666",
            fontSize: "14px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          asperiores temporibus sunt laudantium molestiae.
        </p>

        <form
          onSubmit={handleRegister}
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
            onChange={(e) => setlastname(e.target.value)}
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            style={inputStyle}
          />
         

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              fontSize: "14px",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to="/Login"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Login Now
            </Link>
          </div>

          <button
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
};

export default Register;

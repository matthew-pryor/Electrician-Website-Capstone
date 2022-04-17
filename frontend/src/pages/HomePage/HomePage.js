import React from "react";
import { useEffect, useState } from "react";
import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Calendar from "../../components/Calendar/Calendar";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [electricians, setElectricians] = useState([]);
  const [verifiedEmployee, setVerifiedEmployee] = useState()

  const filterElectricianUsers = (searchElectrician) => {
    let match = electricians.filter((electrician)=>{
        if (electrician.user_id.toString().includes(searchElectrician)){
            let verifiedElectrician = true;
            return verifiedElectrician
        }
        else{
            let verifiedElectrician = false;
            return verifiedElectrician
        }
    })
    setVerifiedEmployee(match)
    console.log(match)
  };

  async function fetchElectricians() {
    let response = await axios.get('http://127.0.0.1:8000/api/customer_or_employee/all/');
    setElectricians(response.data);
  };

  useEffect(() => {
    fetchElectricians();
    console.log(electricians);
    filterElectricianUsers(user.id);
    }, [token]);

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Calendar/>
        {verifiedEmployee && <ServiceRequestForm/>}
        {!verifiedEmployee && (<h1>Customer Account</h1>)}
    </div>
  );
};

export default HomePage;

// {filterElectricianUsers(user.username) && <ServiceRequestForm/>}
// {!filterElectricianUsers(user.username) && null}
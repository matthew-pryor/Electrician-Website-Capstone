import React from "react";
import { useEffect, useState } from "react";
import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Calendar from "../../components/Calendar/Calendar";
import DisplayAppointments from "../../components/DisplayAppointments/DisplayAppointments";



const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [electricians, setElectricians] = useState([]);
  const [matchingElectricians, setMatchingElectricians] = useState([]);
  const [verified, setVerified] = useState(false)
  const [eId, setEId] = useState()

  async function fetchElectricians() {
    let response = await axios.get('http://127.0.0.1:8000/api/customer_or_employee/all/');
    setElectricians(response.data);
  };

  const filterElectricianUsers = (searchElectrician) => {
    let verifiedElectrician = electricians.filter((electrician)=>{
        if (electrician.user_id.toString().includes(searchElectrician)){
            return true
        }
        else{
            return false
        };
    })
    setMatchingElectricians(verifiedElectrician)
  };

  const emptyArray = (array) => {
    if (array.length === 0) {
      setVerified(false)
    }
    else{
      setVerified(true);
      console.log(matchingElectricians[0].id);
      setEId(matchingElectricians[0].id);
      console.log(eId)
    }
    }

  useEffect(() => {
    fetchElectricians();
    console.log(electricians);
    console.log(user.id)
    filterElectricianUsers(user.id);
    emptyArray(matchingElectricians);
    console.log(eId)
    }, []);

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <DisplayAppointments userId={user.id}/>
      <Calendar userId={user.id}/>
        {verified && <ServiceRequestForm electricianId = {eId}/>}
        {!verified && (<h1>Customer Account</h1>)}
    </div>
  );
};

export default HomePage;

// {filterElectricianUsers(user.username) && <ServiceRequestForm/>}
// {!filterElectricianUsers(user.username) && null}
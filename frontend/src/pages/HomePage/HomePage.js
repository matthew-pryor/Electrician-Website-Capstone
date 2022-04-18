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
  const [matchingElectricians, setMatchingElectricians] = useState([]);
  const [verified, setVerified] = useState(true)
  const [eId, setEId] = useState(2)

  async function fetchElectricians() {
    let response = await axios.get('http://127.0.0.1:8000/api/customer_or_employee/all/');
    setElectricians(response.data);
  };

  const emptyArray = (array) => {
    if (array.length === 0) {
      //setVerified(false)
    }
    else{
      //setVerified(true);
      console.log(matchingElectricians[0].id);
      //setEId(matchingElectricians[0].id);
      console.log(eId)
    }
    }

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

  useEffect(() => {
    fetchElectricians();
    filterElectricianUsers(user.id);
    console.log(electricians);
    emptyArray(matchingElectricians);
    console.log(eId)
    }, [token]);

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Calendar userId={user.id}/>
        {verified && <ServiceRequestForm electricianId = {eId}/>}
        {!verified && (<h1>Customer Account</h1>)}
    </div>
  );
};

export default HomePage;

// {filterElectricianUsers(user.username) && <ServiceRequestForm/>}
// {!filterElectricianUsers(user.username) && null}
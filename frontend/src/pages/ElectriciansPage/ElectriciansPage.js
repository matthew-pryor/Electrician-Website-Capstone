import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Email from "../../components/Email/Email";
import axios from "axios";
import { useParams } from "react-router-dom";

const LandingPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [electrician, setElectrician] = useState('');
  const params = useParams();

  useEffect (() => {
      const fetchElectrician = async() =>{
          try{
              let response = await axios.get('http://127.0.0.1:8000/api/customer_or_employee/all/', {
                  headers: {
                      Authorization: "Bearer " + token,
                  },
              })
              console.log(response.data)
              setElectrician(response.data)
          } catch (error) {
              console.log(error.message);
          }
      }
      fetchElectrician();
    }, [token]);

  return (
    <div className="container">



    </div>
  );
};

export default LandingPage;
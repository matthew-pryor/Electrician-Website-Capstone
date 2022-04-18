import React from "react";
import { useEffect, useState } from "react";
import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Calendar from "../../components/Calendar/Calendar";

const VerifyEmployee = (props) => {

    const electricians = props.electricians
    const username = props.username

    const filterElectricianUsers = (searchElectrician) => {
        let verifiedElectrician = false;
        let match = electricians.filter((electrician)=>{
            if (electrician.user_id.toString().includes(searchElectrician)){
                verifiedElectrician = true;
                return (true, setVerifiedEmployee(verifiedElectrician))
            }
            else{
                verifiedElectrician = false;
                return (false, setVerifiedEmployee(verifiedElectrician))
            }
        })
        console.log(verifiedElectrician)
        setElectricianMatch(match)
      };

    useEffect(() => {
        fetchElectricians();
        console.log(electricians);
        filterElectricianUsers(user.id);
        console.log(electricianMatch)
        }, []);

    return ( 
        <div>
            <h1>Home Page for {username}!</h1>
        </div>
    );
}
 
export default VerifyEmployee;
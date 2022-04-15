import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import DisplayElectricians from "../../components/DisplayElectricians/DisplayElectricians";

const ElectriciansPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [electricians, setElectricians] = useState('');
  const params = useParams();

  useEffect(() => {
    getAllElectricians();
  }, []);

  async function getAllElectricians() {
      let response = await axios.get('http://127.0.0.1:8000/api/customer_or_employee/all/');
      setElectricians(response.data);
  }

  return (
    <div className="container">

    <DisplayElectricians electricians={electricians}/>

    </div>
  );
};

export default ElectriciansPage;
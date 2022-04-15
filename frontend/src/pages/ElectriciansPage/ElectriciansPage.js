import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DisplayElectricians from "../../components/DisplayElectricians/DisplayElectricians";
import SearchBar from "../../components/SearchBar/SearchBar";

const ElectriciansPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [electricians, setElectricians] = useState([]);
  const [displayedElectricians, setDisplayedElectricians] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllElectricians();
  }, []);

  async function getAllElectricians() {
      let response = await axios.get('http://127.0.0.1:8000/api/customer_or_employee/all/');
      setElectricians(response.data);
  }

  const filterElectricians = (searchElectrician) => {
      let matchingElectricians = electricians.filter((electrician)=>{
          if (electrician.name.toLowerCase().includes(searchElectrician.toLowerCase()) || 
          electrician.city.toLowerCase().includes(searchElectrician.toLowerCase()) || 
          electrician.zip_code.includes(searchElectrician) ||
          electrician.services.toLowerCase().includes(searchElectrician.toLowerCase())){
              return true;
          }
          else{
              return false;
          }
      })
      setSearch(searchElectrician)
      setDisplayedElectricians(matchingElectricians)
  }

  return (
    <div className="container">

    <SearchBar filterElectricians={filterElectricians}/>

    <DisplayElectricians electricians={displayedElectricians} search={search}/>

    </div>
  );
};

export default ElectriciansPage;
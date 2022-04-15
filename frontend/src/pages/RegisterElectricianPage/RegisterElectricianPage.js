import React from "react";
import useAuth from "../../hooks/useAuth";
import RegisterElectrician from "../../components/RegisterElectrician/RegisterElectrician";

const RegisterElectricianPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h1>Contact Us</h1>
        <RegisterElectrician/>
    </div>
  );
};

export default RegisterElectricianPage;
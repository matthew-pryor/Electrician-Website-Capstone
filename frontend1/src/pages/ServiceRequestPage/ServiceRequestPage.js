import React from "react";
import useAuth from "../../hooks/useAuth";
import ServiceRequestForm from "../../components/ServiceRequestForm/ServiceRequestForm";

const ServiceRequestPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h1>Request Services Page</h1>
        <ServiceRequestForm/>
    </div>
  );
};

export default ServiceRequestPage;

import React from "react";
import useAuth from "../../hooks/useAuth";
import Email from "../../components/Email/Email";

const UpdateAppointmentPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  return (
    <div>
      <h1>Yarp</h1>
    </div>
  );
};

export default UpdateAppointmentPage;
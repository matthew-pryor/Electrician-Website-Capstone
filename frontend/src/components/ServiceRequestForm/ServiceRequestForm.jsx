import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";

const ServiceRequestForm = (props) => {

    const [user, token] = useAuth();
    const [text, setText] = useState('');

    async function handleSubmitForm(event) {
        event.preventDefault();
        let newRequest = {
            user_id: user.username,
            electrician_id: 1,
            appointment_date_time: text,
            appointment_status: 5,
            service_id: 1,
            description: text

        };

        console.log(newRequest);
        await axios.post('http://127.0.0.1:8000/api/appointments/', newRequest, {
            headers: {
                Authorization: "Bearer" + token,
            }
        })
    };


    return ( 
        <form onSubmit={handleSubmitForm}>
            <label>Schedule and Appointment:</label>
            <input></input>
        </form>
     );
}
 
export default ServiceRequestForm;
import axios from "axios";
import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";

const ServiceRequestForm = (props) => {

    const [user, token] = useAuth();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAdderss] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip_code, setZipCode] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email_address, setEmailAddress] = useState('');
    const [electrician_id, setElectricianId] = useState('');
    const [appointment_date_time, setAppointmentDateTime] = useState('');
    const [service_id, setServiceId] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmitForm(event) {
        event.preventDefault();
        let newRequest = {
            user_id: user.username,
            first_name: first_name,
            last_name: last_name,
            address: address,
            city: city,
            state: state,
            zip_code: zip_code,
            phone_number: phone_number,
            email_address: email_address,
            electrician_id: electrician_id,
            appointment_date_time: appointment_date_time,
            appointment_status: 5,
            service_id: service_id,
            description: description

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
            <h1>Schedule and Appointment:</h1>
            <label>First Name</label>
            <input type='text' placeholder="First Name..." value={first_name} onChange={(event) => setFirstName(event.target.value)}/>
            <label>Last Name</label>
            <input type='text' placeholder="Last Name..." value={last_name} onChange={(event) => setLastName(event.target.value)}/>
            <label>Address</label>
            <input type='text' placeholder="Address..." value={address} onChange={(event) => setAdderss(event.target.value)}/>
            <label>City</label>
            <input type='text' placeholder="City..." value={city} onChange={(event) => setCity(event.target.value)}/>
            <label>State</label>
            <input type='text' placeholder="State..." value={state} onChange={(event) => setState(event.target.value)}/>
            <label>Zip Code</label>
            <input type='text' placeholder="XXXXX" value={zip_code} onChange={(event) => setZipCode(event.target.value)}/>
            <label>Phone Number</label>
            <input type='text' placeholder="XXX-XXX-XXXX" value={phone_number} onChange={(event) => setPhoneNumber(event.target.value)}/>
            <label>Email Address</label>
            <input type='text' placeholder="XXXX@email.com" value={email_address} onChange={(event) => setEmailAddress(event.target.value)}/>
            <label>Date/Time</label>
            <input type='text' placeholder="YYYY-MM-DD" value={appointment_date_time} onChange={(event) => setAppointmentDateTime(event.target.value)}/>
            <label>Description</label>
            <input type='text' placeholder="Please provide as many details about the service you are requesting as possible" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <button type="text" class="submit">Add Song</button>
        </form>
     );
}
 
export default ServiceRequestForm;
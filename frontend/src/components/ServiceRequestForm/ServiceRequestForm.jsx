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
    const [appointment_date, setAppointmentDate] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmitForm(event) {
        event.preventDefault();
        let newRequest = {
            user_id: user.id,
            first_name: first_name,
            last_name: last_name,
            address: address,
            city: city,
            state: state,
            zip_code: zip_code,
            phone_number: phone_number,
            email_address: email_address,
            electrician_id: 1,
            appointment_start_date: appointment_date,
            appointment_end_date: appointment_date,
            appointment_status_id: 5,
            service_id: 1,
            description: description

        };

        console.log(newRequest);
        await axios.post('http://127.0.0.1:8000/api/appointments/', newRequest, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    };


    return ( 
        <form onSubmit={handleSubmitForm}>
            <h1>Schedule an Appointment:</h1>

            <div>
            <label>First Name</label>
            <input type='text' placeholder="First Name..." value={first_name} onChange={(event) => setFirstName(event.target.value)}/>
            </div>

            <div>
            <label>Last Name</label>
            <input type='text' placeholder="Last Name..." value={last_name} onChange={(event) => setLastName(event.target.value)}/>
            </div>

            <div>
            <label>Address</label>
            <input type='text' placeholder="Address..." value={address} onChange={(event) => setAdderss(event.target.value)}/>  
            </div>

            <div>
            <label>City</label>
            <input type='text' placeholder="City..." value={city} onChange={(event) => setCity(event.target.value)}/>
            </div>

            <div>
            <label>State</label>
            <input type='text' placeholder="State..." value={state} onChange={(event) => setState(event.target.value)}/>   
            </div>

            <div>
            <label>Zip Code</label>
            <input type='text' placeholder="XXXXX" value={zip_code} onChange={(event) => setZipCode(event.target.value)}/>
            </div>

            <div>
            <label>Phone Number</label>
            <input type='text' placeholder="XXX-XXX-XXXX" value={phone_number} onChange={(event) => setPhoneNumber(event.target.value)}/>
            </div>

            <div>
            <label>Email Address</label>
            <input type='text' placeholder="XXXX@email.com" value={email_address} onChange={(event) => setEmailAddress(event.target.value)}/>
            </div>

            <div>
            <label>Date/Time</label>
            <input type='text' placeholder="YYYY-MM-DD" value={appointment_date} onChange={(event) => setAppointmentDate(event.target.value)}/> 
            </div>

            <div>
            <label>Description</label>
            <input type='text' placeholder="Please provide as many details about the service you are requesting as possible" value={description} onChange={(event) => setDescription(event.target.value)}/>
            </div>

            <div>
            <button type="text" class="submit">Submit</button>
            </div>

        </form>
     );
}
 
export default ServiceRequestForm;
import axios from "axios";
import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import "./ServiceRequestForm.css"

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
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [description, setDescription] = useState('');
    const electrician_id = props.electricianId;

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
            electrician_id: electrician_id,
            title: title,
            start: start,
            end: end,
            appointment_status_id: 2,
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
            <div><label>First Name</label></div>
            <div><input className="input" type='text' placeholder="First Name..." value={first_name} onChange={(event) => setFirstName(event.target.value)}/></div>
            </div>

            <div>
            <div><label>Last Name</label></div>
            <div><input className="input" type='text' placeholder="Last Name..." value={last_name} onChange={(event) => setLastName(event.target.value)}/></div>
            </div>

            <div>
            <div><label>Address</label></div>
            <div><input className="input" type='text' placeholder="Address..." value={address} onChange={(event) => setAdderss(event.target.value)}/></div>  
            </div>

            <div>
            <div><label>City</label></div>
            <div><input className="input" type='text' placeholder="City..." value={city} onChange={(event) => setCity(event.target.value)}/></div>
            </div>

            <div>
            <div><label>State</label></div>
            <div><input className="input" type='text' placeholder="State..." value={state} onChange={(event) => setState(event.target.value)}/></div>   
            </div>

            <div>
            <div><label>Zip Code</label></div>
            <div><input className="input" type='text' placeholder="XXXXX" value={zip_code} onChange={(event) => setZipCode(event.target.value)}/></div>
            </div>

            <div>
            <div><label>Phone Number</label></div>
            <div><input className="input" type='text' placeholder="XXX-XXX-XXXX" value={phone_number} onChange={(event) => setPhoneNumber(event.target.value)}/></div>
            </div>

            <div>
            <div><label>Email Address</label></div>
            <div><input className="input" type='text' placeholder="XXXX@email.com" value={email_address} onChange={(event) => setEmailAddress(event.target.value)}/></div>
            </div>

            <div>
            <div><label>Title</label></div>
            <div><input className="input" type='text' placeholder="Descriptive Title" value={title} onChange={(event) => setTitle(event.target.value)}/></div>
            </div>

            <div>
            <div><label>Start</label></div>
            <div><input type='datetime-local' value={start} onChange={(event) => setStart(event.target.value)}/> </div>
            </div>

            <div>
            <div><label>End</label></div>
            <div><input type='datetime-local' value={end} onChange={(event) => setEnd(event.target.value)}/> </div>
            </div>

            <div>
            <div><label>Description</label></div>
            <div><textarea className="box" type='text' placeholder="Description..." value={description} onChange={(event) => setDescription(event.target.value)}/></div>
            </div>

            <div>
            <button className="button" type="text" class="submit">Submit</button>
            </div>

        </form>
     );
}
 
export default ServiceRequestForm;
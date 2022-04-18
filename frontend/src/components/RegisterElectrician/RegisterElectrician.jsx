import axios from "axios";
import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import "./RegisterElectrician.css"

const RegisterElectrician = () => {

    const [user, token] = useAuth();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip_code, setZipCode] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email_address, setEmailAddress] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [about_me, setAboutMe] = useState('');
    const [services, setServices] = useState('');
    const [rates, setRates] = useState('');
    const [credentials, setCredentials] = useState('');

    async function handleSubmitForm(event) {
        event.preventDefault();
        let newRequest = {
            user_id: user.id,
            user_type: 'Employee',
            image: image,
            name: name,
            city: city,
            state: state,
            zip_code: zip_code,
            phone_number: phone_number,
            email_address: email_address,
            linkedin: linkedin,
            about_me: about_me,
            services: services,
            rates: rates,
            credentials: credentials
        };

        console.log(newRequest);
        await axios.post('http://127.0.0.1:8000/api/customer_or_employee/electricians/', newRequest, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        
    };


    return ( 
        <form onSubmit={handleSubmitForm}>
            <h1>Register as an Electrician Here:</h1>

            <div>
            <div><label>Profile Picture</label></div>
            <div><input className="input" type='text' placeholder="Upload IMG URL here..." value={image} onChange={(event) => setImage(event.target.value)}/></div>
            </div>

            <div>
            <div><label>Name</label></div>
            <div><input className="input" type='text' required={true} placeholder="Name..." value={name} onChange={(event) => setName(event.target.value)}/></div>
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
            <div><label>LinkedIn Profile Link</label></div>
            <div><input className="input" type='text' placeholder="Descriptive Title" value={linkedin} onChange={(event) => setLinkedIn(event.target.value)}/></div>
            </div>

            <div>
            <div><label>About Me</label></div>
            <div><textarea className="box" type='datetime-local' value={about_me} onChange={(event) => setAboutMe(event.target.value)}/> </div>
            </div>

            <div>
            <div><label>Credentials</label></div>
            <div><textarea className="box" type='text' placeholder="Credentials..." value={credentials} onChange={(event) => setCredentials(event.target.value)}/> </div>
            </div>

            <div>
            <div><label>Services</label></div>
            <div><textarea className="box" type='text' placeholder="Services Provided..." value={services} onChange={(event) => setServices(event.target.value)}/> </div>
            </div>

            <div>
            <div><label>Rates</label></div>
            <div><textarea className="box" type='text' placeholder="Rates for Common Services..." value={rates} onChange={(event) => setRates(event.target.value)}/></div>
            </div>

            <div>
            <button type="text" class="submit">Register</button>
            </div>

        </form>
     );
}
 
export default RegisterElectrician;
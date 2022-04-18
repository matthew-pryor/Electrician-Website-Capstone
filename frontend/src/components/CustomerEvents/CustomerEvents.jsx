import axios from "axios";
import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomerEvents.css"

const CustomerEvents = () => {

    const [user, token] = useAuth();
    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    async function handleSubmitForm(event) {
        event.preventDefault();
        let newRequest = {
            user_id: user.id,
            title: title,
            start: start,
            end: end,
        };

        console.log(newRequest);
        await axios.post('http://127.0.0.1:8000/api/appointments/events/', newRequest, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        
    };


    return ( 
        <form onSubmit={handleSubmitForm}>
            <h1>Add an Event to your Calendar:</h1>

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
            <button className="button" type="text" class="submit">Submit</button>
            </div>

        </form>
     );
}
 
export default CustomerEvents;
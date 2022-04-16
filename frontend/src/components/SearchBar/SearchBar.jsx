import React, {useState} from "react";
import "./SearchBar.css"

const SearchBar = (props) => {

    const [searchElectricians, setSearchElectrians] = useState('');

    function handleSubmit(entry){
        entry.preventDefault();
        props.filterElectricians(searchElectricians)
        setSearchElectrians('')
    }

    return ( 
        <div> 
            <form onSubmit={handleSubmit}>
                    <input 
                    value={searchElectricians} 
                    onChange={(entry) => setSearchElectrians(entry.target.value)} 
                    type="text" 
                    placeholder=" Search by Name, City, Zip Code or Services..." 
                    className="input"></input>
                    <button type="text" class="submit" className="search-button">Search</button>
            </form>
        </div>
                
                
                

     );
}
 
export default SearchBar;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ConditionalRouting = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState(''); 
  return (
    <div>
      <h1>Choose which page you want to go</h1>
      

      <fieldset>
        <div>
          <input type="radio" id="huey" name="drone" value="/" onClick={(e)=>{setVal(e.target.value)}} />
          <label for="huey">Home</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="/users"  onClick={(e)=>{setVal(e.target.value)}} />
          <label for="dewey">Users</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="/about"  onClick={(e)=>{setVal(e.target.value)}} />
          <label for="louie">About</label>
        </div>
        
      </fieldset>
      <button onClick={()=>{navigate(val)}}>GO</button>
      
    </div>
  ); 
};

export default ConditionalRouting;

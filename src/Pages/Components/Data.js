import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Data = () => {
    const [searchParam,setSearchParam]=useSearchParams();
    const name = searchParam.get('name');
    const age= searchParam.get('age');
    const city = searchParam.get('city');
    const state = searchParam.get('state');
    const education = searchParam.get('education');
  return (
    <div>
        <h1>Data</h1>
        <h3>Name : {name}</h3>
        <h3>Age : {age}</h3>
        <h3>City : {city}</h3>
        <h3>State : {state}</h3>
        <h3>Education : {education}</h3>
        <button onClick={()=>{setSearchParam({name:'Sagar Roy', age:'25', city:'Malda', state:'West Bengal', education:'Graduate'})}}>Biodata of Sagar</button>
    </div>
  )
}

export default Data
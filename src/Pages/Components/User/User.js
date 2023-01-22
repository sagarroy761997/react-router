import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const param = useParams();
    let {name} = param;

  return (
    <div>This is me: {name}</div>
  )
}

export default User
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Congrate</h1>
        <p>Your payment was successfull </p>
        <button onClick={() => navigate('/')}>Back TO HOme</button>
    </div>
  )
}

export default Success
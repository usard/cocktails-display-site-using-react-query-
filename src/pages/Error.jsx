import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/not-found.svg';

const Error = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <img src={errorImg} style={{height: '450px', width: '600px', marginBottom: '2rem'}} alt="" />
        <h2 style={{marginBottom: '10px'}}>ohh!!</h2>
        <p style={{marginBottom: '10px'}}>couldn't find the page you are looking for</p>
        <Link to='/' style={{color: 'var(--primary-500)'}}>Back Home</Link>
    </div>
  )
}

export default Error;
import React from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { Outlet,useLoaderData } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  )
}

export default Landing
import React from 'react'
import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
       <h3> There was an error... </h3>
       {/* {error.message} */}
    </div>
  )
}

export default SinglePageError
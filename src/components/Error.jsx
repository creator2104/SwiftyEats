import { useRouteError } from 'react-router'
// whenever u see something starting with use its defined as hook 

import React from 'react'

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
  <div className='errorpage flex flex-col justify-center items-center'>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}
export default Error
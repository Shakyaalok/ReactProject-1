import React from 'react'
import './Error.css'

const Error = (props) => {

  const closePopHandler = () =>{
    props.onCloseError();
  }
 


  return (
    <div className='error'>
      <span className='close_pop_up' onClick={closePopHandler}>&times;</span>
      <h3 className='error_description'>{props.missingFields} is Required</h3>
    </div>
  )
}

export default Error

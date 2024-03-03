import React from 'react'

const Error = (props) => {
  console.log(props.missingFields)
  return (
   
    <div>
      <h1>{props.missingFields} is Required</h1>
    </div>
  )
}

export default Error

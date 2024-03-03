import React from 'react'
import './ListOfDetails.css'

const ListOfDetails = (props) => {
  return (
    <div className='ListOfDetails'>
         <div className='detail_id'>{props.id}</div>
      <div className='detail_name'>{props.name}</div>
      <div className='detail_age'>{props.age}</div>
    </div>
  )
}

export default ListOfDetails

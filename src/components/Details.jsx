import React,{useState} from 'react'
import Form from './Form'

const Details = () => {

    let [details,setDetails] = useState([]);
    const GetDataFromFormHandler = (dataFromForm)=>{
        setDetails((orevState)=>[...orevState,dataFromForm]);
    }


  return (
    <div>
        <Form onGetDataFromForm={GetDataFromFormHandler}/>
      <h1>details</h1>
    </div>
  )
}

export default Details

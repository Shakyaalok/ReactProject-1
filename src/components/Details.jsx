import React,{useState} from 'react'
import Form from './Form'
import ListOfDetails from './ListOfDetails'

const Details = () => {

    // let [details,setDetails] = useState([]);
    // const GetDataFromFormHandler = (dataFromForm)=>{
    //     setDetails((orevState)=>[...orevState,dataFromForm]);
    // }


    const [details,setDetails] = useState([
        {name:'ALok', age:25},
        {name:"amit",age:30}
    ])

    const GetDataFromFormHandler = (dataFromForm)=>{
        let includesIdInDetails = {
            ...dataFromForm,
            id:Math.random().toString()

        }
        setDetails((prevState)=>[...prevState,includesIdInDetails]);
        console.log(includesIdInDetails)
    }


  return (
    <div>
        <Form onGetDataFromForm={GetDataFromFormHandler}/>
         {
         details.map((itm)=>(
            <ListOfDetails id={itm.id} name={itm.name} age={itm.age}/>
                             )
          )}
    </div>
  )
}

export default Details

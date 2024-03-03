import React,{useState} from 'react'
import './Form.css'

const Form = (props) => {


    const [name,setName] = useState('');
    const [age,setAge] = useState('');


    const nameHandler = (e) =>{
        setName(e.target.value)
    }

    const ageHandler = (e) =>{
        setAge(e.target.value)
    }


    const formSubmitHandler = (e)=>{
        e.preventDefault();
        const formData = {
            name:name,
            age:age
        }

        props.onGetDataFromForm(formData)

        setName('');
        setAge('');
    }





  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form_controls'>
      <div className='form_control'>
        <label >Name</label>
        <input type="text"  value={name} onChange={nameHandler} />
      </div>
      <div className='form_control'>
        <label >Age</label>
        <input type="number" value={age}  onChange={ageHandler}  />
      </div>
      <button type='submit'>Submit</button>
      </div>
      </form>
  )
}

export default Form

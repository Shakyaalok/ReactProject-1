import React,{useState} from 'react'

const Form = () => {


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
        console.log(name,age);
        setName('');
        setAge('');
    }





  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label >Name</label>
        <input type="text"  value={name} onChange={nameHandler} />
      </div>
      <div>
        <label >Age</label>
        <input type="number" value={age}  onChange={ageHandler}  />
      </div>
      <button type='submit'>Submit</button>
      </form>
  )
}

export default Form

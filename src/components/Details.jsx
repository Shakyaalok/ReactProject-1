import React, { useState } from "react";
import Form from "./Form";
import ListOfDetails from "./ListOfDetails";
import Error from "./Error";

const Details = () => {

  let [details, setDetails] = useState([]);
  let [error, setError] = useState(false);
  let [missingFields,setMissingFields] = useState([])



  const GetDataFromFormHandler = (dataFromForm) => {
    if (!dataFromForm.name || !dataFromForm.age) {
      setMissingFields(Object.keys(dataFromForm).filter(key => !dataFromForm[key]));
      setError(true);
    } else {
      let includesIdInDetails = {
        ...dataFromForm,
        id: Math.random().toString(),
      };

      setDetails((prevState) => [...prevState, includesIdInDetails]);
      setError(false);
    }
  };



  return (
    <div>
      <Form onGetDataFromForm={GetDataFromFormHandler} />
      {error && <Error  missingFields={missingFields}/>}
      {details.map((itm) => (
        <ListOfDetails key={itm.id} id={itm.id} name={itm.name} age={itm.age} />
      
      ))}
    </div>
  );
};

export default Details;

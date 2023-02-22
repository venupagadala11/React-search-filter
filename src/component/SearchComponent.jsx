import React, { useState } from "react";

const  SearchComponent=(proms)=> {
  const [value, setValue] = useState("");


  const onChange = (event) => {
    setValue(event.target.value);
        const arr=proms.array.filter((person)=>{
            if(person.first_name===value)
                return person;
        });
        console.log(arr)
    
  };

  return (
    <>
    <p>{proms.array[0].first_name}</p>
      <div>Input value: {value}</div>
      <input placeholder="Type a value" value={value} onChange={(event)=> setValue(event.target.value)} />
    </>
  );
  
}
export default SearchComponent;



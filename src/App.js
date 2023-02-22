import logo from './logo.svg';
import './App.css';
import data from './component/UsersData';
// import SearchComponent from './component/SearchComponent';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
 
  const [filteredData,setFilteredData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const handleInputChange = (event)=>{

  setsearchValue(event.target.value);
  console.log(searchValue)
  
 
  
}
useEffect(()=>{
  // alwaays make API calls using useEffect.
  setFilteredData(data);
},[]);

useEffect(()=>{
  const newData = data.filter((person)=>
  {
    return (
      person.id.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
      person.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      person.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      person.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      person.gender.includes(searchValue) ||
      person.ip_address.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  setFilteredData([...newData])
  console.log(newData);
},[searchValue])
  return (
    <div className="App">
      <div className="search-bar"><input placeholder="Type a value" value={searchValue} onChange={handleInputChange } /></div>
      
      <table>
        <tr>
          <th>ID</th>
          <th>First_name</th>
          <th>Last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP_Address</th>
          <th>Image</th>
        </tr>

        {filteredData.map((item,index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.ip_address}</td>
          <td><img src={item.image} alt={item.image}/></td>
        </tr>
         ))}
      </table>
    </div>
  );
}

export default App;
// {
//   return (
//     person.id.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
//     person.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
//     person.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
//     person.email.toLowerCase().includes(searchValue.toLowerCase()) ||
//     person.gender.includes(searchValue) ||
//     person.ip_address.toLowerCase().includes(searchValue.toLowerCase())
//   );
// }
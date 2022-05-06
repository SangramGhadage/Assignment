
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function Form() {

  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const [personDetails, setPersonDetails] = useState([])

  const onSubmit = (e) => {
    e.preventDefault();

    let details ={
      id: uuidv4(),
      firstName,lastName
    }
    // console.log(firstName);
    // console.log(lastName);
    setPersonDetails([...personDetails, details])
    setFirstName("")
    setLastName("")
};

  return (
    <div>
        <form action="" className='form'>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" value={firstName} onChange ={(e) =>setFirstName(e.target.value)} id="firstname" placeholder="Enter Your First Name"/>
            </div> 
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" value={lastName} onChange ={(e) =>setLastName(e.target.value)} id="lastname" placeholder="Enter Your Last Name"/>
            </div>
            <div className="btn">
              <button onClick={onSubmit}>Submit</button>
            </div>
        </form>
        <br />
    <table className="marksheet">
      <tbody>
        <tr className="top">
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        {
          personDetails && personDetails.map(eachDetails =>{
            return(
            
              <tr>
                <td>{eachDetails.firstName}</td>
                <td>{eachDetails.lastName}</td>
              </tr>
              

            )
          })
        }
      </tbody>
    </table>
    </div>
    
  )
}

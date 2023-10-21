import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'; 
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes, // we used Routes instead of switches
//   Route
// } from "react-router-dom"; 




function App() { 

  const[fullname,Setfullname] = useState(

    {
      fname : "",
      lname : "",
      email : ""
    } 

  )

  function handlechange(event){

    let outputname = event.target.name;
    let new_val = event.target.value;
    // console.log(name);
    // console.log(new_val);

    // Setfullname((prevValue)=>{ // function needed as for objects key value is deleted so there is no way that we can get the previous values again.
    //   if(name === 'first-name'){
    //     return{
    //       fname : new_val,
    //       lname : prevValue.lname,
    //       email : prevValue.email
    //     }
    //   }
    //   else{
    //     return{
    //       fname : prevValue.fname,
    //       lname : new_val,
    //       email : prevValue.email
    //     }
    //   }
    // })

    Setfullname((preval)=>{
      return{
      ...preval,
      [outputname] : new_val
      };
    });
    

  }


 

  return (
    <>
    {/* <Router>
    <div className='Container'>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Navbar current_action = "asap"/>} />
      </Routes>
    </div>
    </Router> */}
    {/* <Navbar/>
    <About/> */}
    <form>
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <p>{fullname.email}</p>
      <div className='input-class'>
        <input placeholder='first name' type='text' onChange={handlechange} name = "fname" value = {fullname.fname}/>
        <input placeholder='last-name' type='text' onChange={handlechange} name="lname" value = {fullname.lname}/>
        <input placeholder='email' type='email' onChange={handlechange} name="email" value = {fullname.email}/>
        <button className='btn-1'>Submit</button>
      </div>
    </form>
    </>
    
  );
}

export default App;

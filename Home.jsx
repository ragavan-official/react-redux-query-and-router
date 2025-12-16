import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from './slices/Slice'
const Home = () => {
  //action dispatch
  const dispatch=useDispatch()
  const [formin,setFormin]=useState({
    name:"",
    age:"",
    email:"",
    contact:""
  })
  const handle=(e)=>{
const {name,value}=e.target

setFormin((cur)=>{
return{
  ...cur,[name]:value
}}
)
  }

 const addd = (e) => {
e.preventDefault()
  dispatch(setUser(formin));
 
    // Reset form after adding
    setFormin({
      name: "",
      age: "",
      email: "",
      contact: ""
    })}
  return (
    <div>
        <Link to="/"> <div><p>Home</p></div></Link>
        <Link to="/about"> <div><p>about</p></div></Link>
        <Link to="/user"> <div><p>user</p></div></Link>
        <Link to="/contact"> <div><p>contact</p></div></Link>
<form action="">
    <label htmlFor="">name</label>
    <input type="text" name='name' value={formin.name} onChange={handle}/>
    <br />
    <label htmlFor="">age</label>
    <input type="number" name='age' value={formin.age} onChange={handle}/><br />
    <label htmlFor="">email</label>
     <input type="email" name='email' value={formin.email} onChange={handle}/><br />
    <label htmlFor="">contact</label>
    <input type="number" name='contact' value={formin.contact} onChange={handle}/><br />
 


</form>
<button onClick={addd}>add</button>
<button>delete</button>
    </div>
    
  )
}

export default Home
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser } from './slices/Slice';
const User = () => {
  const users = useSelector((state) => state.info.user);
  console.log(users);
   const dispatch=useDispatch()

   const deletee=(index)=>{
    dispatch(deleteuser(index))
   }
  return (
    <div>
      {users?.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <p>Contact: {user.contact}</p>
          <button onClick={()=>deletee(index)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default User;

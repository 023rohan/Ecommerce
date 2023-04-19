import React, { useContext, useState } from 'react'
import { data } from '../../../app/App';
import { TiTick } from 'react-icons/ti';
import './username.css'

const UserName = ()=>{
   const user  =  useContext(data)
   let showuser;
   let type = typeof(user);
   if(type=="string"){
       showuser = user
   }
   const name = window.localStorage.getItem("user");
return(
    <div style={{marginRight:"20px",marginTop:"20px"}}>
      {name? <p style={{color:'green'}}><TiTick/>UserName:{name}</p>:<p className='user-name'>UserName:Please Login</p>}
    </div>
)

}
export default UserName;
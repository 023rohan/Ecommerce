import React,{useState,useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import './LoginCard.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginCard = ({LoginUser}) => {


    const history = useNavigate()

    const [user,setUser] = useState({
        email:"",
        password:""
    })
    
    const handlechange = (e)=>{
    const {name,value} = e.target;
    setUser({
        ...user,
        [name]:value
    })
}

const login = ()=>{
    axios.post("http://localhost:5000/api/login",user)
    .then((res)=>{
        alert(res.data.message)
        if(res.data.message=="Login Successfully"){
         history("/")
        }
        LoginUser(res.data.user.Firstname)
        window.localStorage.setItem("completeuser",res.data.user)
        window.localStorage.setItem("user",res.data.user.Firstname);
    })
}
    return ( 
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <div className="login__inputs">
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input login__input" name='email' onChange={handlechange} placeholder='example@gmail.com' />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >Password</label>
                        <input type="password" className="password__input login__input" name='password' onChange={handlechange} placeholder='**********'/>
                    </div>
                    <div className="login__button__container">
                        <button className="login__button" onClick={login} >LOGIN</button>
                    </div>
                </div>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">Don't have account? <Link onClick={()=>history("/account/register")} to="/account/register" style={{textDecorationLine:"Underline"}}>Create account</Link> </div>
                </div>
            </div>
        </div>
     );

}
export default LoginCard
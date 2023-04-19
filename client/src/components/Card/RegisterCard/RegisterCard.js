import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './RegisterCard.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterCard = () => {

    const history = useNavigate();

    const [user,setUser] = useState({
        Firstname:"",
        Lastname:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    
    const handlechange = (e)=>{
    const {name,value} = e.target;
    setUser({
        ...user,
        [name]:value
    })
    }

   const register = ()=>{
    console.log(user)
    const {Firstname,Lastname,email,password,reEnterPassword} = user;
    if(Firstname&&Lastname&&email&&(password===reEnterPassword)){
        axios.post("http://localhost:5000/api/register",user)
        .then((res)=>{alert(res.data.message)
                    history("/account/login")})
    }
   } 
    return ( 
        <div className="register__card__container">
            <div className="register__card">
                {console.log(user)}
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input type="text" className="fname__input register__input" name='Firstname'value={user.Firstname} onChange={handlechange} />
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">Last name</label>
                        <input type="text" className="lname__input register__input" name='Lastname' value={user.Lastname} onChange={handlechange}/>
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input register__input" placeholder='example@gmail.com' name="email"  onChange={handlechange}/>
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input type="password" className="password__input register__input" name='password'  onChange={handlechange} />
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Re-Enter Password</label>
                        <input type="password" className="password__input register__input" name='reEnterPassword'  onChange={handlechange}/>
                    </div>
                    <div className="register__button__container">
                        <button className="register__button" onClick={register}>Create Account</button>
                    </div>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have account? <Link onClick={()=>history("/account/login")} to="/account/login" style={{textDecorationLine:"Underline"}}>Login</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default RegisterCard;
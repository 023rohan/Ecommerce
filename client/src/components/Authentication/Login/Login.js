import LoginCard from '../../Card/LoginCard/LoginCard';
import './Login.css';

const Login = ({setLoginUser}) => {
    return ( 
        <div className="login__auth__container">
            <div className="login__auth">
                <LoginCard LoginUser={setLoginUser}/>
            </div>
        </div>
     );
}
 
export default Login;
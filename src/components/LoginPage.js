import AuthUser from "../context/AuthContext";
import { useNavigate,
useLocation,
Outlet
} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const { login } = AuthUser();
    const { state } = useLocation();
  
    const handleLogin = () => {
      login().then(() => {
        navigate(state?.path || "/dashboard");
      });
    };
  
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="text">user name:</label>
        <input type={"text"} />
        <label htmlFor="password">password:</label>
        <input type={"password"}/>
        <button onClick={handleLogin}>Log in</button>
      </div>
    );
  }
  export default Login
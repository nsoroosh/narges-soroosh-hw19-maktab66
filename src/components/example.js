import * as React from "react";

const authUserContext = React.createContext();

function AuthUser() {
  const [authenticate, setAuthenticate] = React.useState(false);

  return {
    authenticate,
    login() {
      return new Promise((res) => {
        setAuthenticate(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthenticate(false);
        res();
      });
    }
  };
}

export function AuthenticationProvider({ children }) {
  const auth = AuthUser();

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export default function AuthenticateConsumer() {
  return React.useContext(authUserContext);
}
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
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};
function Nav() {
  const { authenticate, logout, login } = AuthUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>{!authenticate && <button onClick={handleLogin}>Login</button>}</li>
      </ul>
      {authenticate && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}
function RequireAuthentication({ children }) {
  const { authenticate } = AuthUser();
  const location = useLocation();

  return authenticate === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}
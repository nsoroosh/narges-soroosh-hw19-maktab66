import './App.css';
import { useContext } from 'react';
import MainPage from './components/MainPage';
import Login from './components/LoginPage';
import Dashboard from './components/Dashboard';
import { ReferenceDataContext } from './context/ContextFile';
import { ReferenceDataContextProvider } from './context/ContextFile';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";
import AuthUser from './context/AuthContext';
function App() {
  // const { unicornTypes } = useContext(ReferenceDataContext)


  return (

      
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        <Route
          path="/dashboard"
          element={
            <RequireAuthentication>
              <Dashboard />
            </RequireAuthentication>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
       

      
       

  )
}

export default App;


function RequireAuthentication({ children }) {
  const { authenticate } = AuthUser();
  const location = useLocation();

  return authenticate === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}
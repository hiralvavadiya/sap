import './App.css';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import { Routes,Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import Appform from './Components/Appform';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="appform" element={<Appform />} />
      </Routes>
    </>
  );
}

export default App;

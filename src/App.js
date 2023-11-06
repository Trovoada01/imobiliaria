import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import myForms from'./routes/login'
function App() {   
  return (
    <div>
      <Navbar />

      <Outlet />
      <p>Footer</p>
    </div>
  );
}
export default App;

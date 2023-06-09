import logo from './logo.svg';
import './App.css';
import  Home  from 'Container/Home';
import { Route,Routes } from 'react-router-dom';
import Admin from 'Container/Admin/Admin';
function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
  </Routes>
  )
}

export default App;

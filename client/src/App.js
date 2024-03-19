import {Routes, Route, Navigate} from 'react-router-dom'
import Layout from "./pages/Layout"
import Login from "./pages/Login"
import Registration from './pages/Registration';
function App() {
  return (
    <Routes>
       <Route path="/register" element={<Registration />} />
       <Route  path="/login" element={<Login />} />
       <Route  path="/home/*" element={<Layout />} />
       <Route path='*' element={<Navigate to="/login"/>} />
    </Routes>
  );
}

export default App;

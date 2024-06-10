import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Signin from './components/Signin';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './components/ResetPassword.jsx';
import Dashboard from './components/Dashboard.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/forgot' element={<ForgotPassword/>}></Route>
          <Route path="/*" element={<NotFound />} />
          <Route path='/reset/:token' element={<ResetPassword/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
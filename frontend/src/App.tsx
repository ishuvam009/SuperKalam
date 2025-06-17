import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { SignUp } from './components/SignUp';
import { Dashboard } from './pages/Dashboard';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/chat' element={<Dashboard />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

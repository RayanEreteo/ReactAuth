import { AuthProvider } from '../contexts/AuthContext'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'

import '../src/App.css'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Login from './Login'



function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App

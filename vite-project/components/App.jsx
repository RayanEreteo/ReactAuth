import { AuthProvider } from '../contexts/AuthContext'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import '../src/App.css'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'


function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path='/update-profile' element={<UpdateProfile></UpdateProfile>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App

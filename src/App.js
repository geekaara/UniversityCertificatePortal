import React from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./components/Signin";
import Signup from "./components/Singup";
import Account from "./components/Account";
import CertVerification from "./components/CertVerification";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return(
   <div>
       <h1 className='text-center text-3xl font-bold'>
           Welcome to University Certifications Portal!
       </h1> 
       <AuthContextProvider>
          <Routes>
              <Route path='/' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/verify' element={<CertVerification />} />
              <Route
                path='/account'
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
            </Routes> 
        </AuthContextProvider> 
  </div>
  )
}

export default App;

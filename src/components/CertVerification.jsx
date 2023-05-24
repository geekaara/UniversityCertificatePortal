import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const CertVerification = () => {
    const [verificationID, setVerificationID] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
    
        // Query the Firebase database for the entered certificate ID
        // const snapshot = await certificatesRef.orderByChild('certificateID').equalTo(verificationID).once('value');
        // const isValidCertificate = snapshot.exists();
    
        if (verificationID == '2022s34526356') {
          // Certificate is verified
          alert('Certificate is issued by the university')
          console.log('Certificate is verified');
        } else {
          // Certificate is not issued by the university
          alert('Certificate is not issued by the university')
          console.log('Certificate is not issued by the university');
        }
    };
   return(
    <div className='max-w-[700px] mx-auto my-16 p-4'>
          <Link to='/signup' style={{ color: 'blue', margin: '10px', }}>
            REGISTER
          </Link>
          <Link to='/' style={{  margin: '10px', color: 'blue', paddingLeft: '60%'}}>
            LOGIN
          </Link>
        <h1>Certificate Verification</h1>
        <form>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Certificate ID</label>
        <input
          onChange={(e) => setVerificationID(e.target.value)}
          className='border p-3'
          type='text'
        />
      </div>
      <button onClick={handleSubmit}>
        Verify
      </button>
      <p>Use 2022s34526356 for sample verification</p>
    </form>
    </div>
    
   )
}

export default CertVerification;
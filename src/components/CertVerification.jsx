import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const CertVerification = () => {
    const [verificationID, setVerificationID] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setError('');
    
    //   try {
    //     // Query the Firebase database for the entered certificate ID
    //     const snapshot = await certificatesRef.orderByChild('certificateID').equalTo(verificationID).once('value');
    //     const isValidCertificate = snapshot.exists();
    
    //     if (isValidCertificate) {
    //       // Certificate is verified
    //       console.log('Certificate is verified');
    //     } else {
    //       // Certificate is not issued by the university
    //       console.log('Certificate is not issued by the university');
    //     }
    //   } catch (e) {
    //     setError(e.message);
    //     console.log(e.message);
    //   }
    // };
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
      <button>
        Verify
      </button>
    </form>
    </div>
    
   )
}

export default CertVerification;
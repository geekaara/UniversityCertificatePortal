import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import schoolCertificate from './sample.pdf';

 const Account = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await logout();
          navigate('/');
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message);
        }
      };

      const handleDownloadCertificate = () => {
        const link = document.createElement('a');
        link.href = schoolCertificate;
        link.download = 'Certificate.pdf'; 
        link.click();
      };
    
    return(
        <div className='max-w-[600px] mx-auto my-16 p-4'>
            <h1 className='text-2xl font-bold py-4'>Account</h1>
            <p>User Email: {user && user.email}</p>
            <p>
        <a href="#" onClick={handleDownloadCertificate}>
          Download Your Certificate
        </a>
      </p>
            <button onClick={handleLogout} className='border px-6 py-2 my-4'>
                Logout
            </button>
        </div>
    )
 }

export default Account;
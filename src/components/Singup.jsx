import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import "./style.css";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [programCode, setProgramCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        navigate('/account')
        const user = res.user;
        await updateProfile(user, {
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
          mobileNumber: mobileNumber,
          programCode: programCode,
        });
      })
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

   return(
    <div className='container'>
    <div>
      <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
      <p className='py-2'>
        Already have an account yet?{' '}
        <Link to='/' className='underline'>
          LOGIN
        </Link>
      </p>
      <p className='py-2'>
          Verify our student's certificates:{' '}
          <Link to='/verify' className='underline'>
            VERIFY
          </Link>
        </p>
    </div>
    <div className='innerBox'>
    <form onSubmit={handleSubmit} className='loginForm'>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className='border p-3'
          type='email'
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>First Name</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className='border p-3'
          type='text'
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Last Name</label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          className='border p-3'
          type='text'
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Date Of Birth</label>
        <input
          onChange={(e) => setDateOfBirth(e.target.value)}
          className='border p-3'
          type='date'
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Mobile Number</label>
        <input
          onChange={(e) => setMobileNumber(e.target.value)}
          className='border p-3'
          type='number'
        />
      </div>
      <p>If you have completed more than one program please enter the latest program code*</p>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Program Code</label>
        <input
          onChange={(e) => setProgramCode(e.target.value)}
          className='border p-3'
          type='text'
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='border p-3'
          type='password'
        />
      </div>
      <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
        Sign Up
      </button>
    </form>
    </div>
  </div>
   )
}

export default Signup;
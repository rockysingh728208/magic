import React, { useContext, useState } from 'react';
import { AppContext } from './Appcontext';
import axios from "axios"
import {toast} from 'react-toastify'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const [state, setState] = useState('Sign Up');
  const {backendUrl,token,setToken}=useContext(AppContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ name, email, password, state });
try {
  if(state==='Sign Up'){
    const {data}=await axios.post(backendUrl+'/api/user/register',{name,password,email})
    if(data.success){
      localStorage.setItem('token',data.token)
      setToken(data.token)
      toast.success("User Registered Successfully")
    }else{
      toast.error(data.message)
    }
  }
  else{
   const {data}=await axios.post(backendUrl+'/api/user/login',{password,email})
    if(data.success){
      localStorage.setItem('token',data.token)
      setToken(data.token)
         toast.success("User login Successfully")
    }else{
      toast.error(data.message)
    }
  }


} catch (error) {
  toast.error(error.message)
}
  };

useEffect(() => {
if(token){
navigate('/')
}
}, [token])



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-1 text-center">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Please {state === 'Sign Up' ? 'create an account' : 'login'} to book an appointment
        </p>

        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-[16px] font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 text-[16px] font-medium">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1 text-[16px] font-medium">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState('Login')}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState('Sign Up')}
              >
                Create an account
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;

import React from 'react'
import { LoginForm } from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';


export const LoginPage=()=> {
    console.log("its rendering");
    const navigate = useNavigate();
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Login</h2>
      <LoginForm />
    </div>
    <button className="mt-4 text-blue-600 hover:underline" onClick={() => navigate("/register")}>
      Sign Up
    </button>
  </div>
  
    
  )
}
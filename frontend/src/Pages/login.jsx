import React, { useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "./firebase-config";
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const { email, password } = form;
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const token = await userCredential.user.getIdToken();
      Cookies.set('jwtToken', token, { expires: 7, secure: true, sameSite: 'strict' });
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate('/success');
    }
  });

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <MdOutlineEmail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
            <input
              className="w-full pl-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="email"
              placeholder="Email ID"
              name="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="relative">
            <CiLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 text-2xl" />
            <input
              className="w-full pl-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white rounded-full py-2 hover:bg-red-600 transition-colors duration-200"
          >
            Login
          </button>
          <Link to="/signup">New user? SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

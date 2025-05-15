import React, { useState } from "react";
import { login } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginUserMutation } from "../services/authentication";

const Login = () => {
  const [loginUser, {isLoading}] = useLoginUserMutation()
  const [formError,setFormError] = useState({})
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const user = useSelector(((state) => state.value))
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Login data:", formData);
    // dispatch(login({user:formData}))
    console.log("user : ",{user:formData})
    const res = await loginUser(formData)
    console.log(res)
    if(res.error){
      console.log(res.error.data)
      setFormError(res.error.data)
    }
    else if(res.data){
      console.log(res.data)
    }
    // Add your login logic here (e.g. API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        { formError.detail? <span className="text-red-400">{formError.detail}</span> : false}
        {/* { formError.detail?.map((error,index)=>(<span id={index} className="text-red-400" >{error}</span>)) } */}
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          { isLoading? 'Please Wait..' : 'Log In' }
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useRegisterUserMutation } from "../services/authentication";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [formSuccess, setFormSuccess] = useState({});
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(formData);
    
    console.log(res)
    if (res.error) {
      setFormError(res.error.data);
      formError.password?.forEach((error) => console.log(error));
    } else {
      setFormError({});
      setFormSuccess(res.data)
      console.log(res.data);
      console.log(formSuccess)
      navigate('/login/')
    }
    // Add your registration logic here (e.g. API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        { formSuccess.message ? <span className="text-green-400 block"> {formSuccess.message} </span> : false }
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
          {formError.username?.map((error, index) => (
            <span key={index} className="text-red-400 block">
              {error}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
          {formError.first_name?.map((error, index) => (
            <span key={index} className="text-red-400 block">
              {error}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
          {formError.email?.map((error, index) => (
            <span key={index} className="text-red-400 block">
              {error}
            </span>
          ))}
        </div>

        <div className="mb-4">
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

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
          {formError.password?.map((error, index) => (
            <span key={index} className="text-red-400 block">
              {error}
            </span>
          ))}
          {formError.non_field_errors?.map((error, index) => (
            <span key={index} className="text-red-400 block">
              {error}
            </span>
          ))}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
           {isLoading ? 'Registering...' : 'Register'}
        </button>

       

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;

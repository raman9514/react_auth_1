import React from "react";
import { login } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // Simulated user data (can come from props, context, or API)
  const authData = useSelector(((state) => state.auth.access ))
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
    joined: "January 15, 2024"
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
        {
          authData? "user is loginned" : "User is not logged in"
        }
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Name:</span>
            <span className="text-gray-800">{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Role:</span>
            <span className="text-gray-800">{user.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Status:</span>
            <span className={`text-sm px-2 py-1 rounded-full font-semibold ${
              user.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
              {user.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Joined:</span>
            <span className="text-gray-800">{user.joined}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

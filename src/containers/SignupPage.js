import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const options = [
    { label: "Team 1", value: "team_1" },
    { label: "Team 2", value: "team_2" },
    { label: "Team 3", value: "team_3" },
  ];

  const history = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    team_number: "team_1",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, team_number: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        // Redirect to login page using React Router
        history("/login"); // Assuming you have access to history object
      } else {
        const errorData = await response.json();
        console.log("Register failed", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-teal-200 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Task_Nav
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              autoComplete="fullname"
              required
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="team_number"
              className="block text-sm font-medium text-gray-900"
            >
              Team Name
            </label>
            <select
              id="team_number"
              name="team_number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              onChange={handleSelectChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

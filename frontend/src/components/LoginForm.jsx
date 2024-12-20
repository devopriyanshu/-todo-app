import React, { useState } from "react";
import {useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authApi";


export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //   const loginMutation = useLogin();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     loginMutation.mutate({ email, password });
  //   };

  //   return (
  //     <form onSubmit={handleSubmit} className="space-y-4">
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         className="w-full border rounded-lg p-2"
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         className="w-full border rounded-lg p-2"
  //       />
  //       <button
  //         type="submit"
  //         className="w-full bg-blue-600 text-white py-2 rounded-lg"
  //         disabled={loginMutation.isLoading}
  //       >
  //         {loginMutation.isLoading ? "Logging in..." : "Login"}
  //       </button>
  //     </form>
  //   );
  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("login successful",data);
      
      localStorage.setItem("authToken", data.data.token);
      navigate("/");
    },
    onError: (error) => {
      console.error(error.response?.data?.message || "Login failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

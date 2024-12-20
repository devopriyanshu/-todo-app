import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.data.token);
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-lg p-2"
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? "Signing up..." : "Signup"}
      </button>
      <button
        className="mt-4 text-blue-600 hover:underline"
        onClick={() => navigate("/login")}
      >
        Already have an account? Log In
      </button>
    </form>
  );
  //   const signupMutation = useSignup();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     signupMutation.mutate({ name, email, password });
  //   };

  //   return (
  //     <form onSubmit={handleSubmit} className="space-y-4">
  //       <input
  //         type="text"
  //         placeholder="Name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         className="w-full border rounded-lg p-2"
  //       />
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
  //         className="w-full bg-green-600 text-white py-2 rounded-lg"
  //         disabled={signupMutation.isLoading}
  //       >
  //         {signupMutation.isLoading ? "Signing up..." : "Signup"}
  //       </button>
  //     </form>
  //   );
};

// import { useMutation } from "@tanstack/react-query";
// import { login, register } from "../api/authApi";

// export const useLogin = () => {
//   return useMutation(login, {
//     onSuccess: (data) => {
//       localStorage.setItem("authToken", data.data.token);
//     },
//     onError: (error) => {
//       console.error(error.response?.data?.message || "Login failed");
//     },
//   });
// };

// export const useSignup = () => {
//   return useMutation(register, {
//     onSuccess: (data) => {
//       localStorage.setItem("authToken", data.data.token);
//     },
//     onError: (error) => {
//       console.error(error.response?.data?.message || "Signup failed");
//     },
//   });
// };

// export const useLogout = () => {
//   return () => {
//     localStorage.removeItem("authToken");
//   };
// };



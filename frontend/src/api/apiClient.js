import axios from "axios";

const apiClient  = axios.create({
    baseURL :"http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
      },
});

apiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem("authToken");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("API Error:", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );


export default apiClient;
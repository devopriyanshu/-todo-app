import { registerUser, loginUser } from "../services/authService.js";



export const register = async (req, res, User) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(User, name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res, User) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(User, email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

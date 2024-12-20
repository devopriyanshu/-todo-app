import { generatewebtoken } from "../utils/generateToken.js";

export const registerUser = async(User, name, email, password) => {
    const  existingUser = await User.findOne({email});
    if(existingUser) throw new Error('user already exists');

    const user = await User.create({name, email, password});
    return {id: user._id, name: user.name, email: user.email, password:user.password,token: generatewebtoken(user._id) };
   
    
};


export const loginUser = async(User, email, password) =>{
    const user = await User.findOne({email});
    if(!user|| !(await user.comparePassword(password))){
        throw new Error('Invalid email or password');
    }

    return {id: user._id, name: user.name, email: user.email, password:user.password, token: generatewebtoken(user._id)};

}
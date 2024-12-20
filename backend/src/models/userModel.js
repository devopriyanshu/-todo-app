import mongoose from 'mongoose'
import bcrypt from "bcryptjs";


const UserSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique:true},
    password:{type: String, required: true}
},{
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export default (connection) => connection.model("User", UserSchema);

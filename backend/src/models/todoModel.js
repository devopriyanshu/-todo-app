import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: null }, 
    completedAt:{type:Date, default:null}
});

export default (connection) => connection.model("ToDo", ToDoSchema);
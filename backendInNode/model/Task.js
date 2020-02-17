// const user =require('./user');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// Create the User Schema
const TaskSchema = new Schema({
    userId:  { type: Schema.Types.ObjectId, ref: 'users', required: true },
    date: {
        type: Date,
        required: true,
    },
    descripition: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },
    deletedDate: {
        type: Date,
        default: null
    }
});
module.exports = Task = mongoose.model('task', TaskSchema);

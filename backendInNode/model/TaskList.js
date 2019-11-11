
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TaskListSchema = new Schema({
    userId:  { type: Schema.Types.ObjectId, ref: 'user', required: true },
    taskId:  { type: Schema.Types.ObjectId, ref: 'task', required: true },
    projectName: {
        type: String,
    },
    task: {
        type: String,
    },
     taskNotes: {
        type: String,
    },
     taskStatus: {
        type: String,
        required: true
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

module.exports = TaskList = mongoose.model('taskList', TaskListSchema);
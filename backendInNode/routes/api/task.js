const express = require('express');
const router = express.Router();
const Task =require('../../model/Task');
const TaskList =require('../../model/TaskList');

router.post('/task', (req, res) => {

	var taskObj = new Task({userId:JSON.parse(req.body.userData)._id , date:req.body.formData.date, descripition:req.body.formData.description });
	 taskObj.save(function (err, task) {
      if (err) return res.status(200).json({err:err})
      if (task)
      {
      	req.body.formData.taskList.map((taskList,index)=>{
      			var taskObj = new TaskList({userId:JSON.parse(req.body.userData)._id ,
			      	 taskId:task._id,
			      	 projectName:taskList.projectName,
			      	 task:taskList.task,
			      	 taskNotes:taskList.taskNotes,
			      	 taskStatus:taskList.taskStatus
		      	  });

				taskObj.save((error,savedTask)=>{
					   if (err) return res.status(200).json({err:error})
					   	// else console.log(savedTask);
				})
      			
      	})
      	 return res.status(200).json({
            success: true,
            msg: "task List Successfully Saved",
        });
      }
    });
});
module.exports = router;
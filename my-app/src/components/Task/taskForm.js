import React from "react"
import TaskList from "./taskList"
import axios from 'axios';
class Form extends React.Component {
    state = {
        taskList: [{index:Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        date: "",
        description: "",
    }

    handleChange = (e) => {
        if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            // taskList['id'] = this.nextUniqueId();
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, {index:Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        }));

        //         let rows = this.state.taskList;
        // rows.push({index: new Date().getTime()});
        // this.setState({taskList:rows})

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // e.preventDefault(); 
        // axios
        // .post("http://localhost:9000/api/task", this.state)
        // .then(result => {
        //  console.log(result);
        // })
        // .catch(e => this.setState({ errors: e.response }));
    }
    deteteRow = (index) => {
        console.log(index);
        // var array = [...this.state.taskList]
        // array.splice(index, 1);
        // this.setState({taskList:array});//https://stackoverflow.com/questions/54429133/why-react-list-slice-always-delete-the-last-row
        //https://jsfiddle.net/w6cy0bx1/11/
        // https://jsfiddle.net/xk4e1z2s/2/
        //         this.setState({
        //     taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        //   });
        //         console.log("deteteRow",index);

        // console.log(this.nextUniqueId())
        //const users = [...this.state.users];
        const taskList = Object.assign([], this.state.taskList);
        taskList.splice(index, 1);
        this.setState({ taskList: taskList });
    }
    handleSubmit = (e) => { e.preventDefault(); 
        console.log(JSON.stringify(this.state));
        let data={formData:this.state,userData:localStorage.getItem('user')}
            axios.defaults.headers.common["Authorization"] =localStorage.getItem('token');
            axios.post("http://localhost:9000/api/task",data).then(res => {
               console.log(res);
            });
     }
    clickOnDelete(record){
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Add Your Daily Task</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Date</label>
                                                <input type="date" name="date" id="date" className="form-control" placeholder="Enter Date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea name="description" id="description" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Task</th>
                                                <th>Notes</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form
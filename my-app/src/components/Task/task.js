import React from 'react';
export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.state = { date: "", description: "", notes: "", errors: {}, Tasklist: [{projectName:"",task:""}] };
    }

    handleInput = e => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };
    handleForm = e => {
        e.preventDefault();
        const data = { date: this.state.date, description: this.state.description, notes: this.state.notes };
    };
    addTask() {
        this.setState({
            Tasklist: [...this.state.Tasklist, '']
        })
    }
    handleDynamicInput=(e,index)=>{
        console.log(e);
        console.log(index);
        this.state.Tasklist[index]=e.target.value;
        this.setState({Tasklist:this.state.Tasklist});
    console.log(this.state);
    }
    render() {
        return (
            <div className="content">
                <form onSubmit={this.handleForm}>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Login</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Date</label>
                                                <input type="date" name="date" onChange={this.handleInput} className="form-control" placeholder="Enter Date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea name="description" onChange={this.handleInput} className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>Notes</label>
                                                <textarea name="notes" onChange={this.handleInput} className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Task</th>
                                                <th>Description</th>
                                                <th>Notes</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                {
                    this.state.Tasklist.map((task, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea name="projectName" onChange={this.handleDynamicInput(e,index)} className="form-control"></textarea>
                                    </div>
                                </td>
                                <td>
                                <div className="form-group">
                                                <label>Date</label>
                                                <input type="text" name="task" onChange={this.handleDynamicInput(e,index)} className="form-control" placeholder="Enter Date" />
                                            </div>
                                </td>
                            </tr>
                        )

                    })
                }

                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addTask} type="submit" className="btn btn-primary text-center">Add</button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button onClick={this.handleForm} type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>

                </form>
            </div>
        );
    }
}
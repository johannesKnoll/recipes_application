return (
    <div className="content">
        <NotificationContainer/>
        <form onSubmit={this.handleSubmitt} onChange={this.handleChangee} >
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-header text-center">Add Your Daily Task</div>
                        <div className="card-body">
                          
                           
                                <tbody>
                                    <TaskList add={this.addNewRoww} delete={this.clickOnDeletee.bind(this)} taskList={taskList} />
                                </tbody>
                                <tfoot>
                                    <tr><td colSpan="4">
                                        <button onClick={this.addNewRoww} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                    </td></tr>
                                </tfoot>
                            
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
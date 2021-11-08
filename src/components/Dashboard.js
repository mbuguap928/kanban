import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
        <React.Fragment>
            <div className='section-1'>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12">
                            <h1>Dashboard</h1>
                            <div className="text">
                                <p>Welcome To My Kanban Board</p> 
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <p className="float-left">To-Do</p>
                                    <p className="float-right">...</p>
                                </div>
                                <div class="card-body"></div> 
                                <div class="card-footer">Add Card</div>
                            </div>
                        </div>

                        <div className="col-md-4">
                        <button className="btn addcolumn">Add Column</button>
                        </div>

                        <div className="col-md-4">
                            
                        </div>
                    </div>    
                    
                </div>

            </div>
        </React.Fragment>
    )
}

export default Dashboard;
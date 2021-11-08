import React from 'react';
import '../styles/Kanban.css';

function Kanban() {
    return (
        <React.Fragment>
            <div className="footer" >
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div class="card">
                                <div class="card-header">To-Do</div>
                                <div class="card-body"></div> 
                                <div class="card-footer">Add Card</div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            
                            <br />

                            <p className="mx-auto icons">
                                
                            </p>
                        </div>

                        <div className="col-md-4">
                            <div className="footer-links-slogan float-md-right">
                                
                            </div>

                        </div>

                        <div className="hide-on-mobile">
                            &nbsp;
                        </div>

                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Kanban;
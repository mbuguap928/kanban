import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Dashboard() {
    return (
        <React.Fragment>
            <>
                <div className="container-fluid grey">
                    <Header />
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
                            
                        </div>

                    </div>
                    <Footer />
                </div>
            </>
        </React.Fragment>
    )
}

export default Dashboard
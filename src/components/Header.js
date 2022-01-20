import React from 'react';
import '../styles/Header.css';
import{ useHistory }from "react-router-dom";

function Header() {
    let history= useHistory()
    return (
        <React.Fragment>
        
            <div className='section-1'>
                <div className="container">

                    <h1>Kanban</h1>
                    <div className="pt-3 pb-3">
                        <ul className="nav">
                            <li className="nav-item" onClick={()=>{history.push("/");}}>Dashboard</li>|
                            <li className="nav-item" onClick={()=>{history.push("/kanban");}}>Kanban</li>
                        </ul>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Header;
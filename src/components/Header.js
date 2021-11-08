import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';

function Header() {
    return (
        <React.Fragment>
        
            <div className='section-1'>
                <div className="container">
                    <h1 className="kanban"> Kanban </h1>
                    <br />
                    <Navbar />
                </div>

            </div>
        </React.Fragment>
    )
}

export default Header;
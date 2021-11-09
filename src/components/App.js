import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';


function App() {
 
  return (
    <React.Fragment>
      <div className="container-fluid grey">
        <Header />
        <Dashboard/>
        <Footer />

      </div>
    </React.Fragment>    
  )
}

export default App;






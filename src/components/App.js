import React from 'react';
import '../styles/App.css';
import{BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import Kanban from '../Pages/Kanban'


function App() {
  return (
    <>
      <Router>
        <Route path="/kanban" component={Kanban} />
        <Route path="/" component={Dashboard} />
      </Router>
    </>
        );
      }

export default App;






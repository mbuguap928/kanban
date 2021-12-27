import React, { useState } from 'react';
import{BrowserRouter as Router, Switch,Link,Route} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Kanban from "./Pages/Kanban";
import{ DragDropContext } from "react-beautiful-dnd";


function App() {
  const [active,setActive]= useState("FirstCard");
  return (
    <>
     <Router>
      {/* <Link to="/">Dashboard</Link>
      <Link to="/kanban">Kanban</Link> */}

      <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/kanban" exact component={Kanban}/>
      </Switch>
    </Router>
    </>
    );
   }


export default App;






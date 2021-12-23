import React,{ useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import{ useHistory } from "react-router-dom";
import Card from '../components/Card';
import NewCard from '../components/NewCard';
import Title from '../components/Title';
import Inprogress from '../components/Inprogress';
import Data from '../components/Data'
import { result } from 'lodash';



function Kanban() {
    return (
        <React.Fragment>
            <>
                <div className="container-fluid grey">
                    <Header />
                    <div className="container" >
                        <div className="pt-5 pb-5">
                            <Card cards={Data} key="0"/>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        </React.Fragment>
    )
}




function Push() {

    let history=useHistory()

    return (
        <div>
            This is the Kanban page.<button onClick={()=>{history.push("/Dashboard");}}>Go To The Dashboard Page</button>
        </div>
    

    );

}




export default Kanban;
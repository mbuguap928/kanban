import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import{ useHistory } from "react-router-dom";
import Card from '../components/Card';
import NewCard from '../components/NewCard';

function Kanban() {
    return (
        <React.Fragment>
            <>
                <div className="container-fluid grey">
                    <Header />
                    <div className="container" >
                        <div className="pt-5 pb-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <Card header="To-Do" body="" footer="Add Card"/>
                                </div>

                                <div className="col-md-4">
                                    <NewCard />
                                </div>

                                <div className="col-md-4">
                                    {/* <Card /> */}
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

function Push() {

    let history=useHistory()

    return (
        <div>
            This is the Kanban page.<button onClick={()=>{history.push("/Dashboard");}}>Go To The Dashboard Page</button>
        </div>
    

    );

}

export default Kanban;
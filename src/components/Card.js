import React, { useState } from 'react';
import '../styles/Navbar.css';
import styled from 'styled-components';


const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Rename", "Clear", "Delete"];

function Card(properties) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value)
        setIsOpen(false)
        console.log(selectedOption);
    }
    
    return (
        <React.Fragment>

            <div class="card">
                <div class="card-header">
                    <div className="row">
                        <div className="col">
                            {properties.header}
                        </div>
                        <div className="col">
                            <Main>
                                <DropDownContainer>
                                    <DropDownHeader onClick={toggling}>
                                        {selectedOption || "..."}
                                    </DropDownHeader>
                                    {isOpen && (
                                        <DropDownListContainer>
                                            <DropDownList>
                                               
                                                <ListItem>Rename</ListItem>
                                                <ListItem>Clear</ListItem>
                                                <ListItem>Delete</ListItem>
                                            </DropDownList>
                                        </DropDownListContainer>
                                    )}
                                </DropDownContainer>
                            </Main>
                        </div>
                    </div>    
                </div>
                <div class="card-body">{properties.body}</div> 
                <div class="card-footer">{properties.footer}</div>
            </div>

        </React.Fragment>
    )
}

export default Card;

{/* <div className="dropdown">
                                <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                    ...
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">Link 1</a>
                                    <a className="dropdown-item" href="/">Link 2</a>
                                    <a className="dropdown-item" href="/">Link 3</a>
                                </div>
                            </div> */}


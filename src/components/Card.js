import React, { useState } from 'react';
import '../styles/Navbar.css';
import styled from 'styled-components';
import Add from '../components/Add';
import { DragDropContext } from 'react-beautiful-dnd';


const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 5vh;
`;

const DropDownContainer = styled("div")`
  width: 5.0em;
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

function Card({cards, key, footer}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [active, setActive] = useState();

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value)
        setIsOpen(false)
        console.log(selectedOption);
    }
    
    return (
        <React.Fragment>
        <div className="row">
            {cards.map(card => (
                <div className="col">
                    <div class="card">
                        <div class="card-header">

                            <div className="row">
                                    <div className="col">
                                        {card.title}
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
                        <div class="card-body">{card.cards.map(cardBody => (
                            <div>
                                <h3>{cardBody.title}</h3>
                                <h3>{cardBody.description}</h3>
                            </div>
                            ))}
                        </div> 
                        <div class="card-footer">
                            <button 
                                type="button" 
                                className="btn btn-light btn-block"
                                onClick={() => setActive("AddCard")}
                            >
                                Add Card
                            </button>
                        </div>
                    </div>
                </div>
            ))}

{active === "AddCard"  <Add />}
        </div>    
        </React.Fragment>
    )
}

export default Card;
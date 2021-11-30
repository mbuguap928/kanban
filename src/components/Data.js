import { useState } from "react";
import { v4 } from "uuid";

const data =  [
    {
        id: 1,
        title: "To-Do",
        cards: [
            {
                id: 1,
                title: "Create a Kanban using React",
                description: "Project to be review at the end of Sprint",
            },
            {
                id: 2,
                title: "Cook dinner",
                description: "Cook an awesome dinner.",
            },
        ],
    },
    {
        id: 1,
        title: "In Progres",
        cards: [
            {
                id: 1,
                title: "Create a Kanban using React",
                description: "Project to be review at the end of Sprint",
            },
            {
                id: 2,
                title: "Cook dinner",
                description: "Cook an awesome dinner.",
            },
        ],
    },
    {
                id: 1,
                title: "Done",
                cards: [
            {
                id: 1,
                title: "Create a Kanban using React",
                description: "Project to be review at the end of Sprint",
            },
            {
                id: 2,
                title: "Cook dinner",
                description: "Cook an awesome dinner.",
            },
        ],
    },
];

const item= {
    id:v4(),
    name:"Create a kanban using React",

};

const item2={
    id:v4(),
    name:"Cook an awesome dinner",
};

function Data() {
    const[text,setText]=useState("")
    const[state,setState]=useState({
        todo:{
            tile:"To Do",
            items:[item],
        },
        "in-progress":{
            title:"In Progress",
            items:[item2],
        },
        done:{
            title:"Completed",
            items:[],
        },
    });
}








export default data;
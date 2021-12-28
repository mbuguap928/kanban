import { result } from "lodash";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";


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
            }
        ],
    },
];











export default data;
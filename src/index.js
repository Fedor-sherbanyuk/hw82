import React from 'react';
import ReactDOM from 'react-dom/client';
import ListGroup from "./components/ListGroup";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>ListGroup</h1>
        <ListGroup>
            <div>Number 1</div>
            <div>Number 2</div>
            <div>Number 3</div>
        </ListGroup>
    </div>
);

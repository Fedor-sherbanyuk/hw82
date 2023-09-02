import React from "react";

class ListGroup extends React.Component {
    render() {
        return (
            <ul className="list-group"> {React.Children.map(this.props.children, (child, i) => {
                return <li className="list-group-item"><p>{child}</p></li>;
            })}
            </ul>
        );
    }
}

export default ListGroup;
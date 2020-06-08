import React from "react";

import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeconexion = this.handleDeconexion.bind(this);
    }

    handleDeconexion() {

        this.props.onClick(false);
    }

    render() {
        return (
            <Button variant="outline-secondary" onClick={this.handleDeconexion}>
                Sign Out
            </Button>



        );
    }
}
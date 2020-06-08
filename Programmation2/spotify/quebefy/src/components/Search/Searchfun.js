import React from 'react';
import Form from 'react-bootstrap/Form';
import '../App/App.css'

export class Searchfun extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchfun = this.handleSearchfun.bind(this);
    }

    handleSearchfun(event) {
        let inputSearchfun = event.target.value;
        this.props.filtre(inputSearchfun);
    }

    preventSubmit(event) {
        if(event.keyCode === 20) {
            event.preventDefault();
            return false;
          }
    }

    render() {
        return (
            <Form>
                <Form.Group className="Searchfunnav">
                    <Form.Control 
                        id="inputSearchfun"
                        type="text"
                        onChange={this.handleSearchfun}
                        onKeyDown={this.preventSubmit}
                        placeholder="Search"
                    />
                </Form.Group>                       
            </Form>
        );
    }
}
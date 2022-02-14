import React, { Component } from 'react';
import SingleContact from './SingleContact';
import AddContact from './AddContacts';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/contacts')
            .then(res => res.json())
            .then(data => this.setState({ contacts: data }));
    }

    render() {
        return(
            <div>
                <div className="row">
                    <AddContact />
                </div>
                <div className="row">
                    {this.state.contacts.map((contact) => (
                        <SingleContact key={contact.id} item={contact} />
                    ))}
                </div>
            </div>
        )
    }

}
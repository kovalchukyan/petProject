import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactCard from '../ContactCard/contactCard';
import ContactAvatar from '../../Avatar/avatar';
import './contacts-lists.scss';

class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }

    static propTypes = {
        contact: PropTypes.object.isRequired,
        deleteContactFetch: PropTypes.func.isRequired
    };

    modalOpen() {
        this.setState({
            isOpen: true
        });
    };

    modalClose() {
        this.setState({
            isOpen: false
        })
    }

    render() {
        let isOpen = this.state.isOpen;
        return (
            <div>
                <div>{isOpen && <ContactCard open={isOpen} modalClose={this.modalClose} contact={this.props.contact} username={this.props.username} deleteContactFetch={this.props.deleteContactFetch} />}</div>
                <div className="contact" id={this.props.contact.id} onClick={this.modalOpen}>
                    <div className="contact-data">
                        <h3>{this.props.contact.name}</h3>
                        <p>{this.props.contact.email}</p>
                    </div>
                    <div className="contact-avatar">
                        <ContactAvatar title={this.props.contact.name} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactsList;
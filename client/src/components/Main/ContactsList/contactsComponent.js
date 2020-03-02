import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsList from '../ContactsList/contactsList';

class ContactsComponent extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        error: PropTypes.bool,
        deleteContactFetch: PropTypes.func.isRequired
    };

    render() {
        if(this.props.error) {
            return (
                <div className="message">Something goes wrong!</div>
            )
        }

        if(this.props.contacts.length === 0) {
            return (
                <div className="message">Contacts not found</div>
            )
        }

        return (
                    <div className="main">
                        {
                            this.props.contacts.map(contact => {
                                return (
                                    <ContactsList
                                        key={contact._id}
                                        contact={contact}
                                        username={this.props.username}
                                        deleteContactFetch={this.props.deleteContactFetch} />
                                )
                            })
                        }
                    </div>
        )
    }
}

export default ContactsComponent;
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import ContactsComponent from './ContactsList/contactsComponent';
import TextField from '@material-ui/core/TextField';
import ContactCreateComponent from './ContactCreateComponent/contactCreateComponent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(2)
    }
});

class Main extends Component {
    state = {
        contactName: ''
    };

    static propTypes = {
        username: PropTypes.string.isRequired,
        contacts: PropTypes.array.isRequired,
        error: PropTypes.bool,
        isLoading: PropTypes.bool.isRequired,
        createContactFetch: PropTypes.func.isRequired,
        deleteContactFetch: PropTypes.func.isRequired
    };

    searchContactName = (event) => {
        this.setState({
            contactName: event.target.value
        })
    };

    filterContacts = (contacts) => {
        const { contactName } = this.state;

        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(contactName.toLowerCase());
        })
    };

    render() {
        if(this.props.isLoading) {
            return (
                <div className="message">Contacts is loading...</div>
            )
        }

        return (
            <Fragment>
                <main>
                    <div className="main">
                        <div>
                            <div className={this.props.classes.textField}>
                                <TextField
                                    onChange={this.searchContactName}
                                    value={this.state.contactName}
                                    placeholder="Find contact..."/>
                            </div>
                            <div>
                                <ContactCreateComponent
                                    createContactFetch={this.props.createContactFetch}
                                    username={this.props.username} />
                            </div>
                        </div>
                        <ContactsComponent
                            contacts={this.filterContacts(this.props.contacts)}
                            username={this.props.username}
                            error={this.props.error}
                            deleteContactFetch={this.props.deleteContactFetch} />
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Main);
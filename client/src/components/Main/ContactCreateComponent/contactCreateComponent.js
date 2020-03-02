import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    newContactButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(5),
        color: lightBlue[600]
    },
    modalWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: '30%',
        minWidth: '300px',
        padding: theme.spacing(3)
    },
    button: {
        color: lightBlue[600]
    }
});

class ContactCreateComponent extends React.Component {
    state = {
        open: false,
        contactFirstName: {
            value: "",
            hasError: false,
            isValid: false
        },
        contactLastName: {
            value: "",
            hasError: false,
            isValid: false
        },
        email: {
            value: "",
            hasError: false,
            isValid: false
        },
        city: {
            value: '',
            hasError: false,
            isValid: false
        },
        phone: {
            value: '',
            hasError: false,
            isValid: false
        },
        isValid: false
    };


    static propTypes = {
        createContactFetch: PropTypes.func.isRequired
    };

    toggleModal = () => {
        this.setState({
            open: !this.state.open,
            contactFirstName: {
                value: "",
                hasError: false,
                isValid: false
            },
            contactLastName: {
                value: "",
                hasError: false,
                isValid: false
            },
            email: {
                value: "",
                hasError: false,
                isValid: false
            },
            city: {
                value: '',
                hasError: false,
                isValid: false
            },
            phone: {
                value: '',
                hasError: false,
                isValid: false
            },
            isValid: false
        })
    };

    handleNameChange = (event) => {
        let error = false;
        let name = event.target.value;
        let nameRegex = /^[a-zA-Z ]+$/.test(name);

        if (!nameRegex) {
            error = true;
        }

        this.setState({
            [event.target.name]: {
                value: event.target.value,
                hasError: error,
                isValid: nameRegex
            }
        });

    };

    handleEmailChange = (event) => {
        let error = false;
        let email = event.target.value;
        let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

        if (!emailRegex) {
            error = true;
        }

        this.setState({
            email: {
                value: event.target.value,
                hasError: error,
                isValid: emailRegex
            }
        });

    };

    handlePhoneChange = (event) => {
        let error = false;
        let phone = event.target.value;
        let phoneRegex = /^[0-9]{1,12}$/.test(phone);

        if(!phoneRegex) {
            error = true;
        }

        this.setState({
            phone: {
                value: event.target.value,
                hasError: error,
                isValid: phoneRegex
            }
        })
    };


    handleCreateClick = (event) => {
        event.preventDefault();

        const { contactFirstName, contactLastName, email, phone, city } = this.state;
        const { username } = this.props;

        let data = {
            'name': `${contactFirstName.value} ${contactLastName.value}`,
            'email': email.value,
            'phone': phone.value,
            'city': city.value
        };

        this.props.createContactFetch(username, data);
        this.toggleModal();
        this.setState({
            open: false,
            contactFirstName: {
                value: "",
                hasError: false,
                isValid: false
            },
            contactLastName: {
                value: "",
                hasError: false,
                isValid: false
            },
            email: {
                value: "",
                hasError: false,
                isValid: false
            },
            city: {
                value: '',
                hasError: false,
                isValid: false
            },
            phone: {
                value: '',
                hasError: false,
                isValid: false
            },
            isValid: false
        });
    };

    render() {
        const { classes } = this.props;
        const { open, contactFirstName, contactLastName, email, phone, city } = this.state;
        const disable = !contactFirstName.isValid || !email.isValid || !contactLastName.isValid || !phone.isValid || !city.isValid;

        return (
            <React.Fragment>
                <Button
                    className={classes.newContactButton}
                    onClick={this.toggleModal}>
                    Add New Contact
                </Button>
                <Modal
                    open={open}
                    className={classes.modalWrapper}
                    onClose={this.toggleModal}>
                    <Paper className={classes.modal}>
                        <TextField
                            required
                            fullWidth
                            label="Contact First Name"
                            placeholder="Type the contact first name"
                            type="text"
                            margin="normal"
                            autoComplete="contact-firstName"
                            name="contactFirstName"
                            value={contactFirstName.value}
                            onChange={this.handleNameChange}
                            error={contactFirstName.hasError} />
                        <TextField
                            required
                            fullWidth
                            label="Contact Last Name"
                            placeholder="Type the contact last name"
                            type="text"
                            margin="normal"
                            autoComplete="contact-lastName"
                            name="contactLastName"
                            value={contactLastName.value}
                            onChange={this.handleNameChange}
                            error={contactLastName.hasError} />
                        <TextField
                            required
                            fullWidth
                            label="Contact email"
                            placeholder="Type the contact email"
                            type="email"
                            margin="normal"
                            autoComplete="contact-email"
                            name="email"
                            value={email.value}
                            onChange={this.handleEmailChange}
                            error={email.hasError} />
                        <TextField
                            required
                            fullWidth
                            label="Contact phone"
                            placeholder="Type the contact phone"
                            type="string"
                            margin="normal"
                            autoComplete="contact-phone"
                            name="phone"
                            value={phone.value}
                            onChange={this.handlePhoneChange}
                            error={phone.hasError} />
                        <TextField
                            required
                            fullWidth
                            label="Contact city"
                            placeholder="Type the contact city"
                            type="string"
                            margin="normal"
                            autoComplete="contact-city"
                            name="city"
                            value={city.value}
                            onChange={this.handleNameChange}
                            error={city.hasError} />
                        <Button
                            className={classes.button}
                            onClick={this.handleCreateClick}
                            disabled={disable}>
                            Create new contact
                        </Button>
                    </Paper>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ContactCreateComponent);

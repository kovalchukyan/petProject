import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ContactAvatar from '../../Avatar/avatar';
import './contact-card.scss';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        color: lightBlue[600]
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: lightBlue[600]
    },
    deleteButton: {
        position: 'absolute',
        left: theme.spacing(1),
        bottom: theme.spacing(1),
        color: lightBlue[600]
    },
    backButton: {
        color: lightBlue[800]
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    }
}))(MuiDialogActions);

const ContactCard = (props) => {
    const handleClose = () => {
        props.modalClose();
    };

    const deleteContact = () => {
        props.deleteContactFetch(props.username, props.contact._id);
        props.modalClose();
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="title" open={props.open}>
                <DialogTitle id="title" onClose={handleClose}>
                    Contact information
                </DialogTitle>
                <DialogContent dividers>
                    <div className="card">
                        <div className="card-primary">
                            <div className="card-primary-avatar">
                                <ContactAvatar title={props.contact.name} />
                            </div>
                            <div className="card-primary-info">
                                <div className="card-primary-info-name">{props.contact.name}</div>
                                <div className="card-primary-info-phone">+{props.contact.phone}</div>
                            </div>
                        </div>
                        <div className="card-secondary">
                            <table>
                                <tbody>
                                <tr>
                                    <th className="card-secondary-title">Email</th>
                                    <td className="card-secondary-data">{props.contact.email}</td>
                                </tr>
                                <tr>
                                    <th className="card-secondary-title">Location</th>
                                    <td className="card-secondary-data">{props.contact.city}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={deleteContact} className={props.classes.deleteButton}>
                        Delete contact
                    </Button>
                    <Button onClick={handleClose} className={props.classes.backButton}>
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

ContactCard.propTypes = {
    open: PropTypes.bool.isRequired,
    modalClose: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactCard);

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import avatarTitle from '../../utils/avatarTitle';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: lightBlue[600]
    }
});

export default function ContactAvatar({ title }) {
    const classes = useStyles();
    return (
        <Avatar className={classes.avatar}>{avatarTitle(title)}</Avatar>
    )
}

ContactAvatar.propTypes = {
    title: PropTypes.string.isRequired
};
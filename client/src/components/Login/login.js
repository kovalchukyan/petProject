import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { registerUserFetch } from "../../actions/registerUserAction";
import { loginUserFetch } from "../../actions/loginUserAction";

const styles = theme => ({
    loginWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginComponent: {
        width: '30%',
        minWidth: '300px',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5),
        position: 'relative'
    },
    registerButton: {
        color: lightBlue[800],
        position: 'absolute',
        right: theme.spacing(3)
    },
    loginButton: {
        color: lightBlue[600]
    },
    loading: {
        color: lightBlue[600]
    }
});

class LoginComponent extends React.Component {
    state = {
        username: "",
        password: "",
        error: null
    };

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });

    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });

    };

    handleLoginClick = (event) => {
        event.preventDefault();
        this.props.loginUserFetch(this.state.username, this.state.password);
    };

    handleRegisterClick = (event) => {
      event.preventDefault();
      this.props.registerUserFetch(this.state.username, this.state.password);
    };

    render() {
        const { classes, isAuth, isLoading, error } = this.props;
        const { username, password } = this.state;

        if(isAuth) {
            return (
                <Redirect to="/contacts" />
            );
        }

        return (
                <div className={classes.loginWrapper}>
                    <Paper className={classes.loginComponent}>
                        { isLoading && <Typography align="center" className={classes.loading}>Loading...</Typography>}
                        { error && <Typography align="center" color="error">{error}</Typography>}
                        <TextField
                            required
                            fullWidth
                            label="Username"
                            placeholder="Username"
                            type="text"
                            margin="normal"
                            autoComplete="username"
                            name="username"
                            value={username}
                            onChange={this.handleUsernameChange}
                            error={null} />
                        <TextField
                            required
                            fullWidth
                            label="Password"
                            placeholder="Password"
                            type="password"
                            margin="normal"
                            autoComplete="password"
                            name="password"
                            value={password}
                            onChange={this.handlePasswordChange}
                            error={null} />
                        <Button
                            className={classes.loginButton}
                            onClick={this.handleLoginClick}>
                            Login
                        </Button>
                        <Button
                            onClick={this.handleRegisterClick}
                            className={classes.registerButton}>
                            or register as a new user
                        </Button>
                    </Paper>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.userReducer.isAuth,
        isLoading: state.userReducer.isLoading,
        error: state.userReducer.error,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    registerUserFetch,
    loginUserFetch
}, dispatch);

const wrappedLoginComponent = withStyles(styles)(LoginComponent);
export default connect(mapStateToProps, mapDispatchToProps)(wrappedLoginComponent);
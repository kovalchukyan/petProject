import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import  createContactFetch  from '../actions/createContactAction';
import deleteContactFetch from '../actions/deleteContactAction';
import Main from '../components/Main/main';

class MainContainer extends Component {
    render() {
        if(!this.props.isAuth) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <Fragment>
                <Main
                    contacts={this.props.contacts}
                    username={this.props.username}
                    error={this.props.error}
                    isLoading={this.props.isLoading}
                    createContactFetch={this.props.createContactFetch}
                    deleteContactFetch={this.props.deleteContactFetch} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.contactsReducer.isLoading,
        error: state.contactsReducer.error,
        contacts: state.contactsReducer.contacts,
        isAuth: state.userReducer.isAuth,
        username: state.userReducer.username
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    createContactFetch,
    deleteContactFetch
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    };

    render() {
        if(this.state.error) {
            return (
                <div>
                    <div className="message">Something goes wrong!</div>
                </div>
            )
        }
        return this.props.children;
    }
}
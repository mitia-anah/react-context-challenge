import React from 'react';

const { Provider, Consumer } = React.createContext();

class UserContextProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Rosny"
        }
        this.handleUsername = this.handleUsername.bind()
    }

    handleUsername = (username) => {
        this.setState({
            username: username
        })
    }

    render() {
        const { username } = this.state
        return (
            <Provider value={{ username, handleUsername: this.handleUsername }}>
                { this.props.children}
            </Provider >
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer };

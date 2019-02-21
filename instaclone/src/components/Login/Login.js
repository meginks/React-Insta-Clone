import React from 'react'; 

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleLogin = event => {
        const username = this.state.username; 
        localStorage.setItem("username", username); 
        window.location.reload();
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} onChange={this.handleInput}>
                <h1>Log in to Instaclone now!</h1>
                <input 
                type="text" 
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.state.handleInput}
                /> 
                <input
                type="text"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.state.handleInput}
                />
            <button onClick={this.handleLogin}>Log in!</button>
            </form>
        )
    }

}

export default Login; 
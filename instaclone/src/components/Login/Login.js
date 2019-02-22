import React from 'react'; 
import styled from 'styled-components';

// Styled Login Components

const WrapperLogin = styled.div` 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    background-color: tomato;
    width: 100%;
    height: 100%;
    `;

const H1Login = styled.h1` 
    color: white;
    font-size: 5rem;
    padding: .5rem;
    border-bottom: 3px dotted white;
    `;

const FormLogin = styled.form` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    margin: 2rem;
    padding: 2rem;
        `;

const InputLogin = styled.input`
    margin: 2rem;
    padding: 1.5rem;
    `;

const ButtonLogin = styled.button`
    padding: 2rem;
    margin: 2rem;
    background-color: white;
    color: tomato;
    border-radius: 25px;
    font-weight: bold;
    `;

// Login Component

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
            <WrapperLogin>
            <FormLogin onSubmit={this.handleLogin} onChange={this.handleInput}>
                <H1Login>Log in to Instaclone now!</H1Login>
                <InputLogin 
                type="text" 
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.state.handleInput}
                /> 
                <InputLogin
                type="text"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.state.handleInput}
                />
            <ButtonLogin onClick={this.handleLogin}>Log in!</ButtonLogin>
            </FormLogin>
            </WrapperLogin>
        )
    }

}

export default Login; 
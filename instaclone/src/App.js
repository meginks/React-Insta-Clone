import React from 'react'; 
import PostsPage from './PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        };
    }

    componentDidMount() {
        const username = localStorage.getItem("username"); 
        this.setState({username: username}); 
    }

    render() {
        return (
        <div>
            <AuthenticatedPage />
        </div>
        )
    }
}

const AuthenticatedPage = withAuthenticate(PostsPage)(Login);

export default App;
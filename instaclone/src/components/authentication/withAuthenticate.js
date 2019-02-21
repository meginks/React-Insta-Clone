import React from 'react'; 


const withAuthenticate = PostsPage => Login => 
    class extends React.Component { 
        constructor() {
            super(); 
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem('username')) {
                this.setState({ loggedIn: false }); 
            } else {
                this.setState({ loggedIn: true });
            }
        }
        
        render() {
        
            // if user is logged in, render app. 
            if (this.state.loggedIn) {
                return <PostsPage />
            }
            // else render login component 
            return (
            <Login />
            )
        }
    }; 

    export default withAuthenticate;
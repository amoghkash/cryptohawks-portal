// Import Packages
import { Cookies } from 'react-cookie'
import AuthHandler from './handlers/AuthHandler';
import App from './pages/App'
import React from 'react'

// Create cookies object
const cookies = new Cookies();

// Entrypoint Class - Handles Initial Routing
class Entrypoint extends React.Component {
    // Constructir
    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    }

    // Function to Rerender Page from here 
    rerenderParentCallback() {
        this.forceUpdate();
    }
    

    render() {  // Render Function 
        //console.log('EntryPoint') TEST
        let token = cookies.get('token')              
        if(!token){ // If token is not set
            return( <AuthHandler reload={this.rerenderParentCallback}/> ) // Authenticaiton Handler
        }
            return ( <App reload={this.rerenderParentCallback}/> ) // Jump into App
      }
}



export default Entrypoint

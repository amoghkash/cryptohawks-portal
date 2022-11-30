import { Cookies } from 'react-cookie'
import AuthHandler from './handlers/AuthHandler';
import App from './pages/main/App'
import React from 'react'

const cookies = new Cookies();
class Entrypoint extends React.Component {
    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    }

    rerenderParentCallback() {
        this.forceUpdate();
      }
    
    render() {
        //console.log('EntryPoint') TEST
        let token = cookies.get('tokenSet')
        if(!token){
            console.log("AuthAHndler")
            return( <AuthHandler reload={this.rerenderParentCallback}/> )
        }
        return ( <App reload={this.rerenderParentCallback}/> )
      }
}



export default Entrypoint

import { Cookies } from 'react-cookie'
import Login from './pages/main/Login'
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
        console.log('EntryPoint')
        let username = cookies.get('username')
        if(!username){
            return( <Login reload={this.rerenderParentCallback}/> )
        }
        return ( <App /> )
      }
}



export default Entrypoint

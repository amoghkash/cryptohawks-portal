// Import Packages
import { Cookies } from 'react-cookie'
import AuthHandler from './handlers/AuthHandler';
import AppHandler from './handlers/AppHandler';
import React from 'react';

// Create cookies object


function Entry(){
    const cookies = new Cookies();
    let token = cookies.get('token')              
    if(!token){ // If token is not set
        return( <AuthHandler/> ) // Authenticaiton Handler
    }
        return ( <AppHandler /> ) // Jump into App
}
    



export default Entry

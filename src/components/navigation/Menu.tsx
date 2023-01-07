import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faDashboard, faUser, faLock} from "@fortawesome/free-solid-svg-icons"
import {Cookies} from 'react-cookie'

// Holds all Menu Items in List and Links them
function Menu() {
    const cookies = new Cookies();
    const admin = cookies.get('admin')

    if(admin === 'true'){
        return (
            <div>
                    <header className='bold text-6xl justify-self-center'>
                        Menu 
                    </header>
    
                    <ul className="font-bold text-4xl">
                        <li className="py-2 px-2">
                            <Link to="/" className="text-blue-500">
                                <FontAwesomeIcon icon={faHome} className="pr-5"/>
                                Home
                            </Link>
                        </li>
                        <li className="py-2 px-2">
                            <Link to="/tasks" className="text-blue-500">
                                <FontAwesomeIcon icon={faDashboard} className="pr-5"/>
                                My Tasks
                            </Link>
                        </li>
                        <li className="py-2 px-2">
                            <Link to="/account" className="text-blue-500">
                                <FontAwesomeIcon icon={faUser} className="pr-5 pl-1"/>
                                Account
                            </Link>
                        </li>
                        <li className="py-2 px-2">
                            <Link to="/admin" className="text-blue-500">
                                <FontAwesomeIcon icon={faLock} className="pr-5 pl-1"/>
                                Admin
                            </Link>
                        </li>
                    </ul>
            </div>  
    
        );
    }

    return (
        <div>
                <header className='bold text-6xl justify-self-center'>
                    Menu 
                </header>

                <ul className="font-bold text-4xl">
                    <li className="py-2 px-2">
                        <Link to="/" className="text-blue-500">
                            <FontAwesomeIcon icon={faHome} className="pr-5"/>
                            Home
                        </Link>
                    </li>
                    <li className="py-2 px-2">
                        <Link to="/tasks" className="text-blue-500">
                            <FontAwesomeIcon icon={faDashboard} className="pr-5"/>
                            My Tasks
                        </Link>
                    </li>
                    <li className="py-2 px-2">
                        <Link to="/account" className="text-blue-500">
                            <FontAwesomeIcon icon={faUser} className="pr-5 pl-1"/>
                            Account
                        </Link>
                    </li>
                </ul>
        </div>
            

    );
}; 
export default Menu;
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                Welcome to the tablemaker. (under construction!)
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;
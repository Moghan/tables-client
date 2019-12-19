import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_USERS = gql`
  {
    users {
      name
    }
  }
`;

const Users = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <div>
                Welcome to the tablemaker. (under construction!)
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
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
            <ul>
                { data.users.map((user: any, index: number) => <li key={index}>{user.name}</li>) }
            </ul>
        </div>
    )
}

export default Users;
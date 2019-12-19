import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CREATE_USER = gql`
  mutation createUser($name: String! $password: String!) {
    createUser(name: $name password: $password) {
      name
      posts {
          title
      }
    }
  }
`;

const Home = () => {
    // const { loading, error, data } = useQuery(CREATE_GUEST);
    const [createUser, { data }] = useMutation(CREATE_USER);

    React.useEffect(() => {
        //createUser({ variables: { name: "Bea4", password: "bea" } });        
    }, [])

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    console.log("data", data);

    return (
        <div>
            <div>
                Welcome to the tablemaker. (under construction!)
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/users">Users</Link>
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
        </div>
    )
}

export default Home;
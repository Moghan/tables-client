import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Redirect } from 'react-router-dom';

const GET_TOKEN = gql`
  query($name: String!, $password: String!)
  {
    login (name: $name, password: $password) {
      token
    }
  }
`;

const Login = ({email, password, setLogin}: any) => {
    const { called, loading, error, data } = useQuery(GET_TOKEN, {
        variables: { name: email, password },
    });
    
    if (called) {
    if (loading){
        return <p>Loading...</p>;
    }
    if (error) {
        console.log("err data", data);
        setLogin(false);
        //return <Redirect to="/signin" />;
        return <p>Success</p>
    }
    console.log("succ data", data);
    return <Redirect to="/users" />;
    }
}

export default Login;
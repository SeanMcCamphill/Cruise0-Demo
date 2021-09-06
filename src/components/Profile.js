import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();


  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <p>Name: <h2>{user.name}</h2></p>
        Email: <p>{user.email}</p>
        Locale: <p>{user.locale}</p>
        <JSONPretty data={user} />
        Email Verfied: <p>{String(user.email_verified)}</p>
      </div>
    )
  )
}

export default Profile
/*Create a GithubUsers component that fetches a list of users from the Github API and 
renders the list of usernames as a list.When a username is clicked,
    the GithubUser component should be rendered, passing it the username as a prop.*/

import { useEffect, useState } from "react";

export function GithubUsersList() {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [selectedUsername, setUsername] = useState(null);

    async fetchGithubUsers () {
        try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUsers(data);
        console.log(data);
        setError(null)
            
        } catch (error) {
            setError(error)
            
        }
       
    }
    useEffect(() => { fetchGithubUsers() }, []);
   function handleUserClick(username) {
        setUsername(username)
    }
    return (
     <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href="#" onClick={() => handleUserClick(users.login)}>
                {user.login}
              </a>
            </li>
          ))}
        </ul>
    )
    }
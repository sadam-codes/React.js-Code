import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GithubAxios = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios("https://jsonplaceholder.typicode.com/users");
                setUser(response.data)
            }
            catch (error) {
                console.log("Error in fetching GitHub user:", error);
            }
        }
        fetchData()
    }, []);

    return (
        <div>
            {user ? <h1>{user[1].name}</h1> : "Loading.."}
        </div>
    )
}
export default GithubAxios

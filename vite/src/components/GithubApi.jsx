import React, { useEffect, useState } from 'react'

const GithubApi = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUser(data)
            }
            catch (error) {
                console.log("Error fetching GitHub user:", error);
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
export default GithubApi

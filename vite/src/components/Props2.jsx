import React from 'react'
import Props from "../components/Props"

const Props2 = () => {
    const users = [
        {
            username: "Sadam",
            dept: "CS"
        },
        {
            username: "Hasnain",
            dept: "IT"
        },
        {
            username: "Ali",
            dept: "DS"
        },
        {
            username: "Aneeq",
            dept: "CS"
        },
        {}
    ]
    return (
        <div>
            {
                users.map(({ username, dept }, index) => {
                    return username && dept ?
                        <Props key={index} username={username} dept={dept} />
                        :
                        (
                            <p key={index}> No display</p>
                        )
                })
            }
        </div>
    )
}

export default Props2

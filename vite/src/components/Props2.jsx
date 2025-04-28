import React from 'react'
import Props from "../components/Props"

const Props2 = () => {
    const users = [
        {
            username: "Sadam Muneer",
            dept: "CS"
        },
        {
            username: "Hasnain Asad",
            dept: "IT"
        },
        {
            username: "Ali Hassan",
            dept: "DS"
        },
        {
            username: "Aneeq Qureshi",
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

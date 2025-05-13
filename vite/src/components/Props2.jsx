import React from 'react'
import Props from "../components/Props"

const Props2 = () => {
    const users = [
        {
            username: "Sadam Muneer",
            dept: "Computer Science"
        },
        {
            username: "Hasnain Asad",
            dept: "IT"
        },
        {
            username: "Ali Hassan",
            dept: "Data Sceince"
        },
        {
            username: "Aneeq Qureshi",
            dept: "Computer Science"
        },
        {
            username: "Aashan",
            dept: "IT"
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

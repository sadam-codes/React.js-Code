import React from 'react'

function Props({ username, dept }) {
    return (
        <>
            <div>
                <h1>Hello {username}, your dept is {dept}</h1>
            </div>
        </>
    )
}
export default Props

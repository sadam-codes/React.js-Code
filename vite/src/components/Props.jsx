import React from 'react'

function Props({ username, dept }) {
    return (
        <>
            <div>
                <h1>Hello {username}, your department is {dept}</h1>
            </div>
        </>
    )
}
export default Props

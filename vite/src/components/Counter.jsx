import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const addVal = () => {
        // setCounter(counter < 5 ? counter + 1 : counter)
        // setCounter(counter < 5 ? counter + 1 : counter)
        // setCounter(prevvalue => prevvalue < 5 ? prevvalue + 1 : prevvalue)
        setCounter(counter => counter < 5 ? counter + 1 : counter)
    }
    const removeVal = () => {
        setCounter(counter => counter > 0 ? counter - 1 : counter)
    }
    return (
        <>
            <button className='bg-black text-white p-3 m-3 rounded-xl' onClick={addVal}>Add Value</button>
            <button className='bg-black text-white p-3 m-3 rounded-xl' onClick={removeVal}>Remove Value</button>
            <p className='p-3 m-3 rounded-xl'>Value is {counter}</p>
        </>
    )
}

export default Counter

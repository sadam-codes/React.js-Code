import React, { useState } from 'react'

const BgColor = () => {
    const [color, setColor] = useState("black")
    return (
        <div className="w-full h-screen" style={{ background: color }}>
            <button className='p-3 m-1 rounded-xl' onClick={() => setColor("red")} style={{ background: "red" }}>Red</button>
            <button className='p-3 m-1 rounded-xl' onClick={() => setColor("blue")} style={{ background: "blue" }}>Blue</button>
            <button className='p-3 m-1 rounded-xl' onClick={() => setColor("green")} style={{ background: "green" }}>Green</button>
        </div>
    )
}
export default BgColor

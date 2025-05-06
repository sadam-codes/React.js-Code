import React, { act, useState } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    const [active, setActive] = useState("/")
    return (
        <div className='bg-black text-white p-5 mx-auto container rounded-2xl'>
            <div className='rounded-2xl flex justify-between align-center'>
                <Link to="/" onClick={() => setActive("/")} className={active === "/" ? "text-red-600" : "text-white"}>Home</Link>
                <Link to="/about" onClick={() => setActive("/about")} className={active === "/about" ? "text-red-600" : "text-white"}>About</Link>
                <Link to="/contact" onClick={() => setActive("/contact")} className={active === "/contact" ? "text-red-600" : "text-white"}>Contact</Link>
                <Link to="/project" onClick={() => setActive("/project")} className={active === "/project" ? "text-red-600" : "text-white"}>Project</Link>
            </div>
        </div>
    )
}

export default Header

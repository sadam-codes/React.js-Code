import React from 'react'
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();
    return (
        <div className='container mx-auto p-3 bg-black text-white rounded-2xlflex justify-between align-center'>
            <div className='flex justify-between p-5'>
                <Link to="/" className={location.pathname === "/" ? "text-red-500" : "text-white"}>Home</Link>
                <Link to="/about" className={location.pathname === "/about" ? "text-red-500" : "text-white"}>About</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "text-red-500" : "text-white"}>Contact</Link>
            </div>
        </div>
    )
}
export default Header

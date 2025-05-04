import React from 'react'
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto rounded-2xl flex justify-between align-center'>
                <div className='flex justify-between py-5'>
                    <Link to="/" className={location.pathname === "/" ? "text-red-300" : "text-white"}>Home</Link>
                    <Link to="/about" className={location.pathname === "/about" ? "text-red-300" : "text-white"}>About</Link>
                    <Link to="/contact" className={location.pathname === "/contact" ? "text-red-300" : "text-white"}>Contact</Link>
                </div>
            </div>
        </div>
    )
}
export default Header

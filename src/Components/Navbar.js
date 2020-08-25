import React from 'react'


function Navbar() {

    return (<div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            {/* Brand/logo */}
            <a className="navbar-brand" href="#">Products</a>
            {/* Links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add to Cart</a>
                </li>
            </ul>
        </nav>

    </div>)
}

export default Navbar;
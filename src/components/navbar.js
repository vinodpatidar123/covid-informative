import React, { useState } from 'react';

export default function Navbar(){
    const [menu, setMenu] = useState(false);

    return (
    <nav className="navbar is-success">
    <div className="navbar-brand">
            <img src="https://image.freepik.com/free-vector/virus-corona-illustration_71983-696.jpg" style={{width:60}} className="img-fluid ${rounded-top,rounded-right,rounded-bottom,rounded-left, rounded-circle,|}" alt="" />
            <a className="navbar-item" >
                <h2 className="is-uppercase">Covid Informative</h2>
            </a>
    </div>
</nav>
    )
}
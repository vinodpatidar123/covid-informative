import React, { useState } from 'react';

export default function Navbar(){
    const [menu, setMenu] = useState(false);

    return (
    <nav className="navbar is-transparent">
    <div className="navbar-brand">
            <span className="navbar-item" >
                <h2 className="is-uppercase">Covid Informative</h2>
            </span>
            <a role="button" onClick={() => setMenu(!menu)} className={`navbar-burger burger ${menu ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
    </div>
    <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
        <a className="navbar-item item is-uppercase" href="/">
        Home
      </a>
      <a className="navbar-item item is-uppercase" href="/news">
        News
      </a>
      <a className="navbar-item item is-uppercase" href="">
        Zones
      </a>
      <a className="navbar-item item is-uppercase" href="">
        Statewise Stats
      </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}
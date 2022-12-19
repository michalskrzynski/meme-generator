
import React from "react";
import logo from '../assets/logo.png'


export default function Nav() {
  return (
    <nav className="dflex">
     <div className="nav--left dflex">
        <img className="nav--logo" src={logo} alt="" />
        <div className="nav--brand">Meme Generator</div>
      </div>
      <div className="nav--right">
        React Course - Project 3
      </div>
    </nav>
  )
}

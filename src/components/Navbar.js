import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";

import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  state = {clicked: false};
  handleClick = ()=> {
    this.setState({clicked: !this.state.clicked});
  }
  render() {
    return (
      <div>
        <nav className="NavItems">
            <h1 className="navbar-logo">Travellers</h1>

            <div className="menu-icons" onClick={this.handleClick}>
              <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div>

            <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
              {MenuItems.map((item,index)=>{
                return(
                  <li key={index} className={item.className} style={{color:"green"}}>
                    <Link to={item.url} className="navbar-link"><i className={item.icon}></i>{item.title}</Link>
                </li>
                )
              })}
              <button>Sign Up</button>
                

            </ul>

        </nav>
      </div>
    )
  }
}

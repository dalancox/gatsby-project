import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes, { func } from "prop-types"
import { Link } from "gatsby"
import pura from "../images/Vector.svg"
import account from "../images/user-solid.svg"
import shop from "../images/bag-shopping-solid.svg"
import hamburger from "../images/bars-solid.svg"
import close from "../images/xmark-solid.svg"
import "./header.css"



const Header = ({ siteTitle }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
    
  };

  return (
    <>
    <div className={click ? "mobile-view active":"mobile-view"}>
          <Link to="/">DEVICE</Link>
          <Link to="/">FRAGRANCES</Link>
          <Link to="/">BUNDLES</Link>
          <Link to="/">FRAGRANCES QUIZ</Link>
      </div>

      <header>

      <div className="hamburger-menu" onClick={handleClick}>
        <img src={click ? close:hamburger} alt="hamburger" style={{margin: `0 .5rem 0 0`}} width="22" height="22"></img>
      </div>

      <div className="header-logo">
        <Link to="https://help.trypura.com/" className="header-logo-link">
          <div style={{display: `flex`}}>
            <img src={pura} alt="logo" style={{margin: `0 .5rem 0 0`}}></img>
            {siteTitle}
          </div>
        </Link>

        <div className="header-links">
          <Link to="/">DEVICE</Link>
          <Link to="/">FRAGRANCES</Link>
          <Link to="/">BUNDLES</Link>
          <Link to="/">FRAGRANCES QUIZ</Link>
        </div>
      </div>
      
      <div className="shopping-links">
        <Link to="/" className="sign-in-link">
        <img src={account} style={{margin: `0 .5rem 0 0`}} alt="account" width="22" height="22"></img>
        <span style={{fontSize: `12px`}}>SIGN IN</span>
        </Link>
        
        <Link to="/" className="shop">
        <img src={shop} style={{margin: `0 .5rem 0 0`}} alt="shop" width="22" height="22"></img>
        </Link>
      </div>
      
    </header>

    </>
      )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

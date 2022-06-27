import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import pura from "../images/Vector.svg"
import account from "../images/user-solid.svg";
import shop from "../images/bag-shopping-solid.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div  style={{display: `flex`, alignItems: `center`}}>
      <Link to="https://help.trypura.com/" style={{fontSize: `var(--font-lg)`, textDecoration: `none`, marginRight: `3rem`}}>
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
    
    <div style={{display: `flex`, alignItems: `center`, justifyContent: `center`}}>
      <Link to="/" style={{display: `flex`, alignItems: `center`, fontSize: `var(--font-lg)`, textDecoration: `none`, marginRight: `1rem`}}>
      <img src={account} style={{margin: `0 .5rem 0 0`}} width="22" height="22"></img>
      <span style={{fontSize: `12px`}}>SIGN IN</span>
      </Link>
      
      <Link to="/">
      <img src={shop} style={{margin: `0 .5rem 0 0`}} width="22" height="22"></img>
      </Link>
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

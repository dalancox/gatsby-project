import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SearchBar from "../components/searchBar"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>

    <SearchBar />
    <Seo title="Page one" />

    <div className="img-container" style={{
      display: `flex`,
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`,
      width: `auto`,
      flexDirection: `row`,
      flexWrap: `wrap`,
      justifyContent: `center`,
      alignItems: `center`,
      whiteSpace: `nowrap`
    }}>

      <Link to="/wall-diffuser" style={{padding: `0 2rem`, cursor: `pointer`}}>
        <div style={{display: `flex`, justifyContent: `center`}}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_imac_family_2x.png" alt="wall diffuser" width="68" height="68"></img>
        </div>
        <span>Wall Diffuser</span>
      </Link>

      <Link to="/car-diffuser" style={{padding: `0 2rem`, cursor: `pointer`}}>
        <div style={{display: `flex`, justifyContent: `center`}}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png" alt="car diffuser" width="68" height="68"></img>
        </div>
        <span>Car Diffuser</span>
      </Link>

      <Link to="/table-top" style={{padding: `0 2rem`, cursor: `pointer`}}>
        <div style={{display: `flex`, justifyContent: `center`}}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png" alt="tabletop" width="68" height="68"></img>
        </div>
        <span>Table Top Diffuser</span>
      </Link>

      <Link to="/subscriptions" style={{padding: `0 2rem`, cursor: `pointer`}}>
        <div style={{display: `flex`, justifyContent: `center`}}>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png" alt="subscriptions" width="68" height="68"></img>
        </div>
        <span>Subscriptions</span>
      </Link>

    </div>

    <div style={{
      borderBottom: `solid 1px #ddd`
    }}></div>

    <div style={{
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`,
    }}>
      <div style={{display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, width: `100%`}}>
      <img src="https://cdn.shopify.com/s/files/1/0023/0021/5405/files/streamline-icon-star-rating-one_400x400_1_600x600_crop_center.progressive.png.jpg?v=1647367842" width='250' height='250'></img>
        <div style={{maxWidth: `350px`}}>
          <h2>The Pura Promise</h2>
          <h3 style={{fontSize: `15px`, marginBottom: `0.5rem`}}>SAFE. ECO-FRIENDLY. AND OH-SO PREMIUM.</h3>
          <p>We're always in the pursuit of creating life-changing fragrances and products in a way that is safe for your entire family while also being environmentally and socially responsible.</p>
        <Link to="/" style={{color: `blue`}}>Learn More  </Link>
        </div>
      </div>
    </div>

    <div style={{
      borderBottom: `solid 1px #ddd`
    }}></div>

<div style={{
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`,
    }}>
  <div style={{display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, width: `100%`}}>
      <div  style={{maxWidth: `350px`}}>
        <h2>How do I manage my Subscription?</h2>
      <p>Take advantage of our easy-to-use swap fragrance feature, all at a 30% discount! Let's go through how to swap the fragrances in your subscription.</p>
      <Link to="/" style={{color: `blue`}}>Learn More  </Link>
      </div>
      <img src="https://cdn.shopify.com/s/files/1/0023/0021/5405/files/cal_600x600_crop_center.progressive.png.jpg?v=1647369014" width='250' height='250'></img>
    </div>
</div>
    

    </Layout>

  </>
  
)




export default IndexPage

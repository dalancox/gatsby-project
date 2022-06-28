import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (

  <Layout>
  <Seo title="Page one" />

  <div className="img-container" style={{
    display: `flex`,
    width: `auto`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: `center`,
    whiteSpace: `nowrap`
  }}>

    <a>
      <div style={{
        display: `flex`,
        justifyContent: `center`
      }}>
        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_imac_family_2x.png" alt width="68" height="68"></img>
      </div>
      <span>Wall Diffuser</span>
    </a>

    <a>
      <div style={{
        display: `flex`,
        justifyContent: `center`
      }}>
        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png" alt width="68" height="68"></img>
      </div>
      <span>Car Diffuser</span>
    </a>

    <a>
      <div style={{
        display: `flex`,
        justifyContent: `center`
      }}>
        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png" alt width="68" height="68"></img>
      </div>
      <span>Table Top Diffuser</span>
    </a>

    <a>
      <div style={{
        display: `flex`,
        justifyContent: `center`
      }}>
        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png" alt width="68" height="68"></img>
      </div>
      <span>Subscriptions</span>
    </a>

  </div>

  <Link to="/page-2/">Go to page 2</Link>  
  
  </Layout>
)

export default IndexPage

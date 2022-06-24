import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
  <Seo title="Page one" />

  <Link to="/page-2/">Go to page 2</Link>  
  
  </Layout>
)

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WallDiffuser = () => (
  <Layout>
    <Seo title="Wall Diffuser" />
    <h1>Hi from the wall diffuser page</h1>
    <p>Wall Diffuser</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WallDiffuser

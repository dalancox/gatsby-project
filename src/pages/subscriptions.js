import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Subscriptions = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the subscriptions page</h1>
    <p>Subscriptions</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Subscriptions

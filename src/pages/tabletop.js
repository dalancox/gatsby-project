import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TableTop = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the table top page</h1>
    <p>Table Top</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TableTop

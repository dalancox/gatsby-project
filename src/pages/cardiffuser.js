import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CarDiffuser = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the car diffuser page</h1>
    <p>Car diffuser</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CarDiffuser

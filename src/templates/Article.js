import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const Article = ({ data: { markdownRemark } }) => (

  <Layout>
    <div style={{
    display: `block`,
    margin: `0 auto`,
    maxWidth: `var(--size-content)`,
    padding: `var(--size-gutter)`,
  }}>
      <p>{markdownRemark.frontmatter.date}</p>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Link to="/">Go Home</Link>
      </div>
  </Layout>
)
export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default Article
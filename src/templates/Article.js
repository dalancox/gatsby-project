import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Article = ({ data: { markdownRemark } }) => (

  <Layout>
    <div style={{
    display: `block`,
    margin: `0 auto`,
    maxWidth: `var(--size-content)`,
    padding: `var(--size-gutter)`,
  }}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
  </Layout>
)
export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Article
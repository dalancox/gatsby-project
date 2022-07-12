import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const CategoryList = ({ pageContext: { category }, data: { allMarkdownRemark } }) => (

<Layout>
    <div>
        <h1>{category} Articles</h1>
        <ul>
        {allMarkdownRemark.edges.map(({ node }) => {
            return (
            <li key={node.frontmatter.title}>
                <Link to={`article/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                <div>
                <time>{node.frontmatter.date}</time>
                </div>
            </li>
            )
        })}
        </ul>
    </div>  
</Layout>
  
)

export const query = graphql`
  query CategoryListQuery($ids: [String]!) {
    allMarkdownRemark(filter: { id: { in: $ids } }) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`

export default CategoryList
import * as React from "react"
import Layout from "../../components/layout"
import TableTopDiffuserHeader from "../../components/headers/tableTopDiffuserHeader"
import { Link } from "gatsby"

export default function Index() {
  return (
  
    <Layout>
    <TableTopDiffuserHeader />
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <h1>Table Top</h1>
        <div>Hello from the Wall Diffuser directory</div>
        <Link to="/">Go home</Link>
      </div>
    
  </Layout>
  
  )
}
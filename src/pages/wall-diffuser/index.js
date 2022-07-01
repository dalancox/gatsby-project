import * as React from "react"
import Layout from "../../components/layout"
import WallDiffuserHeader from "../../components/headers/wallDiffuserHeader"
import { Link } from "gatsby"

export default function Index() {
  return (
  
  <Layout>
    <WallDiffuserHeader />
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <h1>Wall Diffuser</h1>
        <div>
            <Link to="/wall-diffuser/diffuser-offline">Diffuser Offline</Link>
        </div>
        <Link to="/">Go home</Link>
      </div>
    
  </Layout>
  
  )
}
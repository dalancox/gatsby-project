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
        <div style={{display: `flex`, justifyContent: `center`, fontSize: `var(--font-lx)`}}>
          <h1>Wall Diffuser</h1>
        </div>
        <div>
          <h1 style={{marginBottom: `1rem`}}>Diffuser Setup and Features</h1>
          <p>Set up and navigate your diffuser and its features</p>
          <div style={{borderBottom: `1px solid #ddd`}}></div>
          <h3>Diffuser Setup</h3>
          <div style={{display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`, gap: `1rem`}}>
            <Link to="/article/setting-up-your-pura-device">
              <div style={{backgroundColor: `#ddd`, width: `325px`, padding: `1rem`, borderRadius: `5px`}} >
                <h4 style={{margin: `0`}}>Set Up Your Pura Diffuser</h4>
                <p style={{margin: `0`, fontSize: `12px`}}>Learn how to setup your Pura diffuser!</p>
              </div>
            </Link>
            <Link to="/article/diffuser-offline">
              <div style={{backgroundColor: `#ddd`, width: `325px`, padding: `1rem`, borderRadius: `5px`}} >
                <h4 style={{margin: `0`}}>Diffuser Offline</h4>
                <p style={{margin: `0`, fontSize: `12px`}}>Learn how to reconnect your Pura diffuser!</p>
              </div>
            </Link>
          </div>
          
        </div>
        <Link to="/">Go home</Link>
      </div>
    
  </Layout>
  
  )
}
import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby"

export default function DiffuserOffline() {
    return (
        <Layout>
            <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <h1>Diffuser Offline</h1>
        <Link to="/">Go home</Link>
      </div>
        </Layout>
    )
}
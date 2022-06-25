import React from "react"


const Search = () => (

<div style={{
    margin: `0 auto`,
    padding: `var(--space-4) var(--size-gutter)`,
    display: `flex`,
    height: `20rem`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    background:`linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)`
}}>
    <h1 style={{
        color: `black`,
        padding: `0 0 2rem 0`,
        margin: `0`,
        fontSize: `45px`
        }}>
        Hi, how can we help?
    </h1>
    <input style={{
        maxWidth: `45rem`,
        width: `95%`,
        height: `40px`,
        border: `none`,
        borderRadius: `5px`,
        paddingLeft: `25px`
    }}
    placeholder="Seach" />

</div>

)

export default Search
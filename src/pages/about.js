import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h3>Hello
      <span
        style={{ fontSize: '90%', margin: '0 0.4em', color: '#ee6962' }}
        className='th th-moon-o'
      />
    </h3>
    <p>
      I'm Kenia, a front end programmer with an eye for design who loves learning about <a href="/" className="fancy-link">eldrich</a> beings that may one
      day rise again, having a good cry, and drinking tea.
    </p>

    Find me on&nbsp;
    <a
      href="https://github.com/kenniaa"
      target="_blank"
      rel="noopener noreferrer"
      className='fancy-link'
    >
      github
    </a>.&nbsp;
  </Layout>
);

export default About

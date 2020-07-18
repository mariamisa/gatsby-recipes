import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

export default function Contact({data}) {
    return (
        <Layout>
            <div>hi from contact us <Link to={data.site.siteMetadata.contactInfo}>facebook link</Link> </div>
        </Layout>
    )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        contactInfo
      }
    }
  }
`
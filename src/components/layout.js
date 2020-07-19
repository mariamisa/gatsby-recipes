import React from "react"
import {useStaticQuery,graphql,Link} from 'gatsby'
import LayoutStyle from  '../style/layout.module.css'

const ListLink = ({to,children}) => (
    <li className={LayoutStyle.navLi}>
        <Link to={to}>{children}</Link>
    </li>
)

export default function Layout({ children }) {
    const {site:{siteMetadata:{title}}} =useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    title
                }
                }
            }
        `)
    return (
        <div className={LayoutStyle.layoutContainer}>
            <header>
                <nav>
                <Link to="/" className={LayoutStyle.logo}>
                    <h3>{title}</h3>
                </Link>
                    <ul>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="/search">Search</ListLink>
                        <ListLink to="/contact/">Contact</ListLink>
                    </ul>
                </nav>
            </header>
            <div className={LayoutStyle.container}>
            {children}
            </div>
        </div>
    )
}

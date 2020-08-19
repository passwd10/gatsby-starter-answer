import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => {
  config.autoAddCss = false

  library.add(faUser, fab, far)
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, introduction, social } = data.site.siteMetadata

        return (
          <div className="user">
            <Image
              className="profile"
              fixed={data.profile.childImageSharp.fixed}
              alt="Your Profile"
              style={{ borderRadius: `100%` }}
            />
            <div className="description">
              <Link to="/about">
                <span className="author">{author}</span>
              </Link>
              <p className="intro">{introduction}</p>
              {social.map((v, index) => (
                <a href={v.url} key={index}>
                  <FontAwesomeIcon
                    key={index}
                    icon={['far', v.icon]}
                    style={{ width: '23px', marginRight: '10px' }}
                    fixedWidth
                    className='icon'
                  />
                  <FontAwesomeIcon
                    key={index}
                    icon={['fab', v.icon]}
                    style={{ width: '23px', marginRight: '10px' }}
                    fixedWidth
                    className="icon"
                  />
                </a>
              ))}
            </div>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export const bioQuery = graphql`
  query Bioquery {
    profile: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          icon
          url
        }
      }
    }
  }
`
export default Bio

import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './index.scss';

export const Bio = () => {

  config.autoAddCss = false

  library.add(faUser, fab)
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { profile, author, introduction, social }
          = data.site.siteMetadata

        return (
          <div className='user'>
            <img src={profile}
              className='profile'
              alt="Your Profile"
              style={{borderRadius: `20%`}} />
            <div className='description'>                    
              <Link to='/about'>
                <h3 className='author'>
                  {author}
                </h3>
              </Link>
              <p className='intro'>
                {introduction}
              </p>
              {social.map((v, index) =>
                <a href={v.url} key={index}>
                  <FontAwesomeIcon
                    key={index}
                    icon={['fab', v.icon]}
                    style={{width: '23px', marginRight:'10px'}}
                    fixedWidth
                    className='icon'
                  />
                </a>
              )}
            </div>
          </div>
        )
      }}
    >
    </StaticQuery>
  )
}

export const bioQuery = graphql`
  query Bioquery {
    site {
      siteMetadata {
        profile
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
export default Bio;

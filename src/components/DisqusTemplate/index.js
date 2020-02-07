import React from 'react'
import { Disqus } from 'gatsby-plugin-disqus'

const DisqusTemplate = ({ siteUrl, slug, identifier, title }) => {
  let disqusConfig = {
    url: siteUrl + slug,
    identifier: identifier,
    title: title,
  }

  return <Disqus config={disqusConfig} />
}

export default DisqusTemplate

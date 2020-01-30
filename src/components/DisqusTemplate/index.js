import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const DisqusTemplate = ({siteUrl, slug, identifier, title}) => {
  let disqusConfig = {
    url: siteUrl+slug,
    identifier: identifier,
    title: title,
  }

  return (
    <>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusTemplate
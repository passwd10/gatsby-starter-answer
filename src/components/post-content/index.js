import React from 'react'

export const PostContent = ({ post }) => (
  <div dangerouslySetInnerHTML={{ __html: post }} />
)

export default PostContent

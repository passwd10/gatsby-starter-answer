import React from 'react'
import { graphql } from 'gatsby'

import './index.scss'

export default ({ content }) => {
  console.log('data', content)
  return (
    <div className='check-box'>
      <p><input type='checkbox'/>TIL컨텐츠 추가하고 배포하기(light house / netlify / pr)</p>
      <p><input type='checkbox'/>네트워크 구조 책 정리하기</p>
      <p><input type='checkbox'/>틈날때 마다 웹지탱 독서</p>
      <p>{content}</p>
    </div>
  )
}
import React from 'react'
import Top from '../top'
import Footer from '../footer'

import './index.scss'

export const Layout = ({ children, title }) => (
  <>
    <Top title={title} />
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
    <Footer />    
  </>
)

export default Layout;
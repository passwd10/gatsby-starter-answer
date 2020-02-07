import React from 'react'
import Top from '../top'
import Footer from '../footer'

import './index.scss'

export const Layout = ({ children, title }) => (
  <>
    <Top title={title} />
    <div className="layout-body">{children}</div>
    <Footer />
  </>
)

export default Layout

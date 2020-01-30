import React from 'react'
import Top from '../top'

export const Layout = ({ children, title }) => (
  <>
    <Top title={title} />
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  </>
)

export default Layout;
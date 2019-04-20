import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import s from "./layout.module.scss"

const Layout = ({ children }) => (
  <div className={s.container}>
    <div className={s.content}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout

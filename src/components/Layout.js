import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import Routers from './Routers'

const Layout = () => {
  return (
    <div style={{marginTop: '100px'}}>
        <Header/>
        <React.Fragment>
            <Routers/>
        </React.Fragment>
        <Footer/>
    </div>
  )
}

export default Layout
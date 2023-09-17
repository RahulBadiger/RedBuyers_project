import React from 'react'
import Mainbody from './Mainbody'
import Buildpage from '../Midpage/Buildpage'
import { Downmid } from '../Downmidsection/Downmid'
import Box from '../BoxFormat/Box'
import Footer from '../Footers/Footer'
import Lastfooter from '../Lastfooter/Lastfooter'
const Home = () => {
  return (
    <div>
        <Mainbody />
        <Buildpage />
        <Downmid />
        <Box />
        <Footer />
        <Lastfooter />
    </div>
  )
}

export default Home
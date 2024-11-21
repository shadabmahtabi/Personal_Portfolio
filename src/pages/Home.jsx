import { lazy } from 'react'
import Applayout from '../components/layouts/Applayout'
import LandingPage from '../components/specific/LandingPage'
import Aboutme from '../components/specific/Aboutme'
import Projects from '../components/specific/Projects'
import GetInTouch from '../components/specific/GetInTouch'
import { Stack } from '@mui/material'

const Home = () => {
  return (
    <Stack boxSizing={"border-box"} minHeight={"90vh"}>
      <LandingPage />
      <Aboutme />
      <Projects />
      <GetInTouch />
    </Stack>
  )
}

export default Applayout()(Home)
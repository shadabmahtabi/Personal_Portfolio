import { Dialog, Drawer, Stack } from '@mui/material'
import React from 'react'
import { NavLinks } from '../styles/StyledComponents'

const Sidebar = ({setIsSidebar}) => {
  return (
    <Drawer open onClose={() => setIsSidebar(false)}>
      <Stack width={"80vw"} height={"100vh"} gap={"2vh"} alignItems={"center"} paddingTop={"15vh"}>
        <NavLinks to={"#home"}>Home</NavLinks>
        <NavLinks to={"#about"}>About</NavLinks>
        <NavLinks to={"#projects"}>Projects</NavLinks>
        <NavLinks to={"#contact"}>Contact</NavLinks>
      </Stack>
    </Drawer>
  )
}

export default Sidebar
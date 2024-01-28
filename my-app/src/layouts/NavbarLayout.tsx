import { Box } from '@chakra-ui/react'
import NAVBAR from '../components/Navbar'
// import { Outlet } from "react-router-dom";

const NavbarLayout = () => (
  <Box className='App' pos={'sticky'} w='100%' top={0}>
    <NAVBAR />
    {/* <div className="pages" style={{ margin: 30 }}>
      <Outlet />
    </div> */}
  </Box>
)

export default NavbarLayout

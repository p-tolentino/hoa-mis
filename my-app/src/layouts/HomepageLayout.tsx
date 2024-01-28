import { Box } from '@chakra-ui/react'
import NAVBAR from '../components/Navbar'
import ABOUT from '../pages/About'
import FACILITIES from '../pages/Facilities'
// import POLICIES from "../pages/policies";
import CONTACT_US from '../pages/ContactUs'

const HomepageLayout = () => (
  <Box className='App' pos={'sticky'} w='100%' top={0}>
    <NAVBAR />
    <ABOUT />
    <FACILITIES />
    <CONTACT_US />
  </Box>
)

export default HomepageLayout

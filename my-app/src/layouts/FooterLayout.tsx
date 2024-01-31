import { Box } from "@chakra-ui/react";
import FOOTER from "../components/Footer";
// import { Outlet } from "react-router-dom";

const FooterLayout = () => (
  <Box className="App" w="100%" bottom={0}>
    <FOOTER />
    {/* <div className="pages" style={{ margin: 30 }}>
      <Outlet />
    </div> */}
  </Box>
);

export default FooterLayout;

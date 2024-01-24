import { Container } from "@chakra-ui/react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLayout from "./layouts/NavbarLayout";

import LOGIN from "./pages/Login";

// import ABOUT_US from "./pages/AboutUs";
// import FACILITIES from "./pages/Facilities";
// import POLICIES from './pages/policies';
// import CONTACT_US from "./pages/ContactUs";

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<ABOUT_US />} />
    //       <Route path="/*" element={<NavbarLayout />}>
    //         {/*LOGIN*/}
    //         <Route path="login" element={<LOGIN />} />

    //         <Route path="about-us" element={<ABOUT_US />} />
    //         <Route path="facilities" element={<FACILITIES />} />
    //         {/* <Route path="policies" element={<POLICIES />} /> */}
    //         <Route path="contact-us" element={<CONTACT_US />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <Container maxW="100%" px="0">
      <NavbarLayout />
      <LOGIN />
      {/* <ABOUT_US /> */}
      {/* <FACILITIES /> */}
      {/* <CONTACT_US /> */}
    </Container>
  );
}

export default App;

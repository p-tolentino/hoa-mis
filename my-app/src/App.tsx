import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import SIGN_IN from "./pages/SignIn";
import SIGN_UP from "./pages/SignUp";

import USERMANAGEMENT from "./pages/UserManagement";
import HomepageLayout from "./layouts/HomepageLayout";
import SystemLayout from "./layouts/SystemPageLayout";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomepageLayout />} />
          <Route path="sign-in" element={<SIGN_IN />} />
          <Route path="sign-up" element={<SIGN_UP />} />
          <Route path="membership-menu" element={<SystemLayout />} />
          <Route path="user-management" element={<USERMANAGEMENT />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

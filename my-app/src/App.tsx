import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import SIGN_IN from "./pages/SignIn";
import SIGN_UP from "./pages/SignUp";
import HOMEPAGE from "./layouts/HomepageLayout";
import SystemLayout from "./layouts/SystemLayout";
import USERMANAGEMENT from "./pages/UserManagement";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HOMEPAGE />} />
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

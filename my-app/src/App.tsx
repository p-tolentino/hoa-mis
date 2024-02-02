import { BrowserRouter, Routes, Route } from "react-router-dom";

import SIGN_IN from "./pages/SignIn";
import SIGN_UP from "./pages/SignUp";
import HOMEPAGE from "./layouts/HomepageLayout";
import SystemLayout from "./layouts/SystemLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HOMEPAGE />} />
          <Route path="sign-in" element={<SIGN_IN />} />
          <Route path="sign-up" element={<SIGN_UP />} />
          <Route path="membership-menu" element={<SystemLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SIGN_IN from "./pages/SignIn";
import SIGN_UP from "./pages/SignUp";
import HOMEPAGE from "./layouts/HomepageLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HOMEPAGE />} />
          <Route path="sign-in" element={<SIGN_IN />} />
          <Route path="sign-up" element={<SIGN_UP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

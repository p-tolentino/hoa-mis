import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SIGN_IN from './pages/SignIn'
import HOMEPAGE from './layouts/HomepageLayout'
import SIDEBAR from './components/Sidebar'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<HOMEPAGE />} />
          <Route path='sign-in' element={<SIGN_IN />} />
          <Route path='membership-menu' element={<SIDEBAR />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

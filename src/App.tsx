import { Route, Routes } from 'react-router'
import './App.css'
import AppLayout from './layouts/app-layout'
import Landing from './pages/landing'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'

function App() {

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Landing />} ></Route>
        <Route path='dashboard' element={<Dashboard />} ></Route>
        <Route path='auth' element={<Auth />} ></Route>
        <Route path='link/:id' element={<Link />} ></Route>
        <Route path=':id' element={<RedirectLink />} ></Route>
      </Route>
    </Routes>
  )
}

export default App

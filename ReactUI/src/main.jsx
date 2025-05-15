import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements,Route } from 'react-router-dom'
import Login from './component/Login.jsx'
import Layout from './component/Layout.jsx'
import Register from './component/Register.jsx'
import Dashboard from './component/Dashboard.jsx'
import { Home } from 'lucide-react'
import { store } from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Route>
   )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserContextProvider>
  </StrictMode>,
)

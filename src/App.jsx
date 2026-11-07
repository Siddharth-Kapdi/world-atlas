import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import MainLayout from './Layouts/MainLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './pages/CountryDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'country',
        element: <Country />,
      },
      {
        path: '/country/:id',
        element: <CountryDetails />,
      },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

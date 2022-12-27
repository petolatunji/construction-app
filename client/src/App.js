import styled from 'styled-components'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom'

import Footer from './components/Footer'

import Home from './pages/Home'

import About from './pages/Services'
import Services from './pages/About'
import Projects from './pages/Projects'
import Navbar from './pages/Navbar'
import Contact from './pages/Contact'
import SinglePage from './pages/SinglePage'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/project-details',
        element: <SinglePage />,
      },
    ],
  },
])

function App() {
  const Container = styled.div`
    background-color: white;
  `
  const Wrapper = styled.div`
  width:100%
  max-width:1400px ;
  `

  return (
    <Container>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </Container>
  )
}

export default App

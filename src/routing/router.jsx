import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import Home from './home'
import Skills from './skills'
import Qualification from './qualification'
import Services from './services'
import Projects from './projects'
import Contact from './contact'
import NotFound from './notfound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/qualification',
        element: <Qualification />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

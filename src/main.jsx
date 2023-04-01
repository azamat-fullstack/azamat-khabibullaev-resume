import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/scss/main.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/router'

import 'remixicon/fonts/remixicon.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { store } from './store'
import { Provider } from 'react-redux'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme.js'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </StrictMode>
)

import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg:
          props.colorMode === 'dark' ? 'var(--body-color)' : 'var(--body-color)'
      }
    })
  }
})

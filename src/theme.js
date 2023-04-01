import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

export const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'var(--body-font)',
        color: 'var(--text-color)',
        bg:
          props.colorMode === 'dark' ? 'var(--body-color)' : 'var(--body-color)'
      }
    })
  }
})

import { extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { colors } from './colors'
import { Container } from './components/Container'

export const theme = extendTheme({
  colors,
  styles,
  components: {
    Container,
  },
})

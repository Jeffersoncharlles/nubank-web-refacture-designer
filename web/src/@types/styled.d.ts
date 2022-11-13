import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

// extrair a tipagem criada pelo typescript
type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
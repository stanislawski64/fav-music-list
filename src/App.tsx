import { CssBaseline } from '@mui/material'

import { ThemeProvider } from './theme/themeProvider'
import { Home } from './pages/Home'

export const App = () => (
  <ThemeProvider>
    <CssBaseline enableColorScheme />
    <Home />
  </ThemeProvider>
)

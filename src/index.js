import { ThemeProvider } from '@material-ui/core'
import { render } from 'react-dom'
import App from './components/App'
import theme from './theme/theme'

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

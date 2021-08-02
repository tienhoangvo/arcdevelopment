import { createTheme } from '@material-ui/core'
import typography from './typography'

const vars = {
  primary: '#252525',
  primaryLight: '#3e3e3e',
  primaryDark: '#141414',
  secondary: '#d91b42',
  secondaryLight: '#e74062',
  secondaryDark: '#bb1739',
  inheritDefault1: '#bbb',
  inheritDefault2: '#bbb',

  second: '#070919',
  indigo: '#7420ff',
  purple: '#793de6',
  pink: '#fc26a4',
  red: '#f83245',
  yellow: '#ffc926',
  green: '#1bc943',
  teal: '#18e1a5',
  cyan: '#27dcf3',

  orange: '#fa8142',
  orangeDark: '#f96a1f',
  orangeLight: '#fb9865',
}

const theme = createTheme({
  palette: {
    dark: vars.second,
    white: vars.inheritDefault1,
    primary: {
      main: vars.primary,
    },

    grey: {
      300: vars.inheritDefault1,
      A100: vars.inheritDefault2,
    },
    secondary: {
      main: vars.secondary,
    },
    error: {
      main: vars.red,
    },
    success: {
      main: vars.green,
    },
    warning: {
      main: vars.orange,
    },
    helpers: {
      primary: vars.blue,
      main: 'rgba(25, 46, 91, .035)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: '0.5rem',
  },
  overrides: {
    MuiButton: {
      text: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      containedSizeSmall: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      root: {
        textTransform: 'none',
        fontWeight: 'normal',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderRadius: '50px',
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: vars.secondary,
        padding: '8px 16px',
        fontSize: '13px',
      },
      arrow: {
        color: vars.secondary,
      },
    },
  },
  typography: typography,
  orangePink: `linear-gradient(to bottom right,var(${vars.orangeLight}),var(${vars.orangeDark}) 85%)`,
})

export default theme

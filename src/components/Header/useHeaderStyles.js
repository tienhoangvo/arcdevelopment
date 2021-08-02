import { makeStyles } from '@material-ui/core'

const useHeaderStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '4rem',

    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    height: '8rem',

    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  tabsContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: theme.spacing(3),

    '&:first-child': {
      marginLeft: 0,
    },
  },
  button: {
    marginLeft: '50px',
    marginRight: '25px',
    fontWeight: 500,
    letterSpacing: 1,
    height: '45px',
    fontSize: '1rem',
  },
  menu: {
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },

    '&.Mui-selected': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  drawerIcon: {
    height: '2.2rem',
    width: '2.2rem',
  },

  drawer: {
    backgroundColor: theme.palette.primary.light,
    // color: 'white',
  },

  drawerItem: {
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
    '&.Mui-selected': {
      opacity: 1,
    },
  },

  drawerItemText: {
    ...theme.typography.tab,
    color: 'white',
  },
}))

export default useHeaderStyles

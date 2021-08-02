import {
  Toolbar,
  Tabs,
  Tab,
  Button,
  MenuItem,
  Menu,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import { Menu as MenuIcon } from '@material-ui/icons'

import { useTheme } from '@material-ui/styles'

import { Link, useLocation } from 'react-router-dom'

import useHeaderStyles from './useHeaderStyles'
import logo from './../../assets/logo.svg'
import ElevateAppBar from '../ElevateAppBar/ElevateAppBar'

import useRelativeActiveTab from '../../hooks/useRelativeActiveTab'
import { useState } from 'react'

const Header = () => {
  const classes = useHeaderStyles()
  const { pathname } = useLocation()
  const theme = useTheme()
  const matches = useMediaQuery(
    theme.breakpoints.down('md')
  )
  const active = useRelativeActiveTab({
    pathname,
    level: 0,
  })

  const iOS =
    process.browser &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  const onClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const onClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const onDrawerButtonClick = (e) => {
    setOpenDrawer(!openDrawer)
  }

  const menuOptions = [
    {
      name: 'Services',
      to: '/services',
    },
    {
      name: 'Custom Software',
      to: '/services/customsoftware',
    },
    {
      name: 'Mobile App Development',
      to: '/services/mobileapps',
    },
    {
      name: 'Website Development',
      to: '/services/websites',
    },
  ]

  const routes = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Services',
      to: '/services',
    },
    {
      name: 'The Revolution',
      to: '/revolution',
    },
    {
      name: 'Contact Us',
      to: '/contact',
    },
  ]

  const renderedMenuItems = menuOptions.map(
    ({ name, to }) => (
      <MenuItem
        key={name}
        onClick={onClose}
        component={Link}
        to={to}
        classes={{ root: classes.menuItem }}
        selected={pathname === to}
      >
        {name}
      </MenuItem>
    )
  )

  const renderedTabs = routes.map(({ name, to }) => {
    if (to === '/services')
      return (
        <Tab
          key={to}
          aria-owns={
            anchorEl ? 'simple-menu' : undefined
          }
          aria-haspopup={anchorEl ? 'true' : undefined}
          onMouseOver={onClick}
          className={classes.tab}
          label={name}
          value={to}
          component={Link}
          to={to}
          disableRipple
        />
      )

    return (
      <Tab
        key={to}
        className={classes.tab}
        label={name}
        value={to}
        component={Link}
        to={to}
        disableRipple
      />
    )
  })

  const tabs = (
    <>
      <Tabs
        indicatorColor="primary"
        value={active}
        className={classes.tabsContainer}
      >
        {renderedTabs}
      </Tabs>

      <Button
        variant="contained"
        color="secondary"
        disableElevation
        className={classes.button}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={onClose}
        MenuListProps={{ onMouseLeave: onClose }}
        classes={{ paper: classes.menu }}
      >
        {renderedMenuItems}
      </Menu>
    </>
  )

  const renderedListItems = routes.map(
    ({ name, to }) => (
      <ListItem
        button
        divider
        key={name}
        component={Link}
        to={to}
        selected={pathname === to}
        className={classes.drawerItem}
        onClick={(_) => {
          setOpenDrawer(false)
        }}
      >
        <ListItemText
          primary={name}
          className={classes.drawerItemText}
        />
      </ListItem>
    )
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={(_) => setOpenDrawer(false)}
        onOpen={(_) => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List>
          {renderedListItems}
          <ListItem
            selected={pathname === '/estimate'}
          >
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              size="large"
              disableElevation
              component={Link}
              to="/estimate"
              onClick={(_) => setOpenDrawer(false)}
            >
              Estimate
            </Button>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        color="inherit"
        className={classes.drawerIconContainer}
        onClick={onDrawerButtonClick}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )

  return (
    <>
      <ElevateAppBar>
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
          >
            <img
              src={logo}
              alt="Arcdevelopment logo"
              className={classes.logo}
            />
          </Button>

          {matches ? drawer : tabs}
        </Toolbar>
      </ElevateAppBar>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header

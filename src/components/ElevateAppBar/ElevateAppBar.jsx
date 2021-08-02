import {
  makeStyles,
  useScrollTrigger,
} from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import { cloneElement } from 'react'

const useElevateAppBarStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.down('md')]: {
      zIndex: theme.zIndex.modal + 1,
    },
  },
}))
const ElevateAppBar = ({ children }) => {
  const classes = useElevateAppBarStyles()
  return (
    <ElevationScroll>
      <AppBar className={classes.appBar}>
        {children}
      </AppBar>
    </ElevationScroll>
  )
}

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default ElevateAppBar

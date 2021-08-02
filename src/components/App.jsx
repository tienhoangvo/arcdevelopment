import {
  Box,
  Container,
  Typography,
} from '@material-ui/core'
import Header from './Header/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

const Home = (_) => (
  <Box my={2}>
    <Typography variant="body1">
      {[...new Array(120)]
        .map(
          () => `HOME consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </Typography>
  </Box>
)

const Services = (_) => (
  <Box my={2}>
    <Typography variant="body1">
      {[...new Array(120)]
        .map(
          () => `SERVICES consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </Typography>
  </Box>
)

const Revolution = (_) => (
  <Box my={2}>
    <Typography variant="body1">
      {[...new Array(120)]
        .map(
          () => `REVOLUTION consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </Typography>
  </Box>
)

const App = (_) => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="services"
            element={<Services />}
          >
            <Route
              path="customsoftware"
              element={<Services />}
            />
            <Route
              path="mobileapps"
              element={<Services />}
            />
            <Route
              path="websites"
              element={<Services />}
            />
          </Route>

          <Route
            path="revolution"
            element={<Revolution />}
          />
          <Route path="about" element={<Services />} />
          <Route
            path="contact"
            element={<Services />}
          />
          <Route
            path="estimate"
            element={<Services />}
          />
        </Routes>
      </Container>
    </Router>
  )
}

export default App

import { Routes,Route,NavLink } from "react-router-dom";
import {Navbar,Container,Nav} from 'react-bootstrap'
import HOME from './components/Home'
import SIGNUP from './components/SignUp'
import LOGIN from './components/login'
import CONTACTUS from './components/ContactUs'
function App() {
  return (
    <div>
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="">MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="">Home</NavLink>
                <NavLink className="nav-link" to="signup">SignUp</NavLink>
                <NavLink className="nav-link" to="login">Login</NavLink>
                <NavLink className="nav-link" to="contactus">ContactUs</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<HOME/>}></Route>
        <Route path="/signup" element={<SIGNUP/>}></Route>
        <Route path="/login" element={<LOGIN/>}></Route>
        <Route path="/contactus" element={<CONTACTUS/>}></Route>
      </Routes>
    </div>
  );
}
export default App;

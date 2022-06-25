import { Routes,Route,NavLink, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import Home from "../Home";
import SIGNUP from '../SignUp'
import LOGIN from '../Login'
import CONTACTUS from '../ContactUs'
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import {useSelector,useDispatch} from 'react-redux';
import { clearLoginStatus } from "../../slices/UserSlice";
import './header.css';
import { useEffect } from "react";
function Header(){
    let {userObj,isPending,isFulfilled,isRejected,errMsg}=useSelector((state)=>state.userData);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userLogout=()=>{
        localStorage.clear();
        dispatch(clearLoginStatus());
        navigate("/login");
    };
    return(
        <>
            <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                  
                <Navbar.Brand href=""><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                { isFulfilled !==true ?(
                    <Nav className="ms-auto">
                    <NavLink className="nav-link" to="">Home</NavLink>
                    <NavLink className="nav-link" to="signup">SignUp</NavLink>
                    <NavLink className="nav-link" to="login">Login</NavLink>
                    <NavLink className="nav-link" to="contactus">ContactUs</NavLink>
                    </Nav>):(
                 <>
                 {/* This dropdown is visible only when a user is logged in */}
                 <NavDropdown
                   title={userObj.username}
                   id="collasible-nav-dropdown"
                   className="ms-auto logutSection text-white"
                 >
                   <NavDropdown.Item>Change password</NavDropdown.Item>

                   <NavDropdown.Divider />
                   <NavDropdown.Item onClick={userLogout}>
                     Logout
                   </NavDropdown.Item>
                 </NavDropdown>
               </>
            )}
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<SIGNUP/>}></Route>
            <Route path="/login" element={<LOGIN/>}></Route>
            <Route path="/contactus" element={<CONTACTUS/>}></Route>
            <Route path='/userdashboard' element={<UserDashBoard/>}></Route>
            </Routes>
      </>
    )
}
export default Header;
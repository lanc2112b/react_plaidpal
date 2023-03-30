import { useContext } from 'react';
import { UserContext } from '../contexts/User' 
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderNav = () => { 
    
  const { user } = useContext(UserContext); //setUser 
  
  return (<Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="PlaidPal.png" alt="plaid pal logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link" >
              Home
            </Link>
            <Link to="/login" className="nav-link" >
            Log {!user.username ? "In" : "Out"}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

export default HeaderNav;
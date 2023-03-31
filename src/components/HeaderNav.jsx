import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/User' 
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderNav = () => { 
    
  const { user, setUser } = useContext(UserContext); //setUser 

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    setUser({
      user: {
        firstName: null,
        lastName: null,
        picture: null,
        email: null,
        token: null,
      },
    });
  };
  
  return (<Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="PlaidPal.png" alt="plaid pal logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="nav-link" >
            <i className="fas fa-house me-2"></i>
              Home
          </Link>
          
          {user.email !== null ?
            < Nav.Item className="nav-link" onClick={logout}>
              <i className="fas fa-user me-2"></i>
            Log Out
          </Nav.Item>
            :
          <Link to="/login" className="nav-link"  >
            <i className="fas fa-user me-2"></i>
            Log In
        </Link>
          }
          
        

          {user.email !== null ? <Link to="/signup" className="nav-link"  >
            <i className="fas fa-user me-2"></i>
            Register
          </Link> : ""}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

export default HeaderNav;
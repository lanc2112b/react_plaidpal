import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const Footer = () => {

    return (

        <footer className="mt-4 bg-dark d-flex container-fluid py-4">
            <div className="container d-flex flex-row justify-content-evenly align-items-center text-white">
                <div>
                    <ul className="mb-0 fa-ul">
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fa-brands fa-github me-2"></i>
                            </span>
                            <span className="ms-3">

                            GitHub
                            </span>
                        </li>
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fa-brands fa-linkedin me-2"></i>
                            </span>
                            <span className="ms-3">

                            LinkedIn
                            </span>
                        </li>
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fa-brands fa-discord me-2"></i>
                            </span>
                            <span className="ms-3">

                            Discord
                            </span>
                        </li>
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fa-brands fa-twitter me-2"></i>
                            </span>
                            <span className="ms-3">

                            Twitter
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="h-100 d-flex flex-row flex-wrap align-content-end justify-content-end align-items-stretch">&copy; PlaidPal 2023</div>
                <div>
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Link to="#" className="nav-link text-white">
                                <span className="fa-li">
                                    <i className="fa-brands fa-twitter me-2"></i>
                                </span>
                                <span className="ms-3">

                                    Privacy Policy
                                </span>
                                
                            </Link>

                        </Nav.Item>
                        <Nav.Item>
                            <Link to="#" className="nav-link text-white">
                                <span className="fa-li">
                                    <i className="fa-brands fa-twitter me-2"></i>
                                </span>
                                <span className="ms-3">

                                    T & Cs
                                </span>

                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="#" className="nav-link text-white">
                                <span className="fa-li">
                                    <i className="fa-brands fa-twitter me-2"></i>
                                </span>
                                <span className="ms-3">

                                    About Us
                                </span>

                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="#" className="nav-link text-white">
                                <span className="fa-li">
                                    <i className="fa-brands fa-twitter me-2"></i>
                                </span>
                                <span className="ms-3">

                                    Contact Us
                                </span>

                            </Link>

                        </Nav.Item>
                    </Nav>
                </div>
            </div>
    </footer>)

}

export default Footer;
import LoginButton from './LoginButton';
import FlashMessage from "./FlashMessage";
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {

    //const theUser = localStorage.getItem("user");

    //console.log(theUser);

    return (

        <section className="Login">
            <Container className="mt-sm-3 mt-lg-5 ">
                <Row>
                    <Col></Col>
                    <Col xs={12} md={10} lg={8} className="p-5 shadow-sm d-flex flex-column justify-content-center align-items-center text-center  bg-white">

                        <h3 className="display-6">Login</h3>
                        <p>Welcome Back</p>
                        <p className="mb-5">
                            Please login below to access your accounts.
                            
                        </p>
                        <FlashMessage />
                        <LoginButton />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>



        </section>

    )

}

export default Login;
import LoginButton from './LoginButton';
import FlashMessage from "./FlashMessage";
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {

    return (

        <section className="Login">
            <Container className="mt-sm-3 mt-lg-5 ">
                <Row>
                    <Col></Col>
                    <Col xs={12} md={10} lg={8} className="p-5 shadow-sm d-flex flex-column justify-content-center align-items-center  bg-white">

                        <h1>Login</h1>
                        <p>Welcome back: var from user storage</p>
                        <p>
                            <span>Some login text here if needed
                            </span>
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
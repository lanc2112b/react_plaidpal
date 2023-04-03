import LoginButton from './LoginButton';
import FlashMessage from "./FlashMessage";
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {

    //const theUser = localStorage.getItem("user");

    //console.log(theUser);

    return (

        <section className="Login">
            <Container className="mt-sm-3 mt-lg-5 ">
                <Row className="pb-4">
                    <Col></Col>
                    <Col xs={12} md={10} lg={8} className="p-4 pt-2 shadow-sm d-flex flex-column align-items-center bg-white">
                        <Row className="mb-3">
                            <Col></Col>
                            <Col xs={12} md={10} lg={10} className="pt-2">
                                <h2 className="mb-3 mt-2 text-center">Login</h2>
                                <hr />

                                <p className="text-center">Welcome Back</p>
                                <p className="text-center mb-5">
                                    Please login below to view your accounts.

                                </p>
                                <div className="d-flex justify-content-center pb-4">
                                    <LoginButton />
                                </div>

                            </Col>
                            <Col></Col>
                        </Row>
                        <FlashMessage />

                    </Col>
                    <Col></Col>
                </Row>
            </Container>



        </section>

    )

}

export default Login;
import RegisterButton from './RegisterButton';
import FlashMessage from "./FlashMessage";
import { Container, Row, Col } from 'react-bootstrap';

const RegisterPage = () => {

    return (

        <section className="Register">
            <Container className="mt-sm-3 mt-lg-5">
                <Row>
                    <Col></Col>
                    <Col xs={12} md={10} lg={6} className="p-4 pt-2 shadow-sm d-flex flex-column bg-white">
                        <Row className="mb-3">
                            <Col></Col>
                            <Col xs={12} md={10} lg={10} className="pt-2">
                                <h2 className="mb-3 mt-2 text-center">Sign Up</h2>
                                <hr />
                                <h4 className="text-left mb-3">
                                    By signing up you'll be able to:
                                </h4>
                                <ul className="ms-5 fa-ul">
                                    <li>
                                        <span className="fa-li">
                                            <i class="fa-regular fa-square-plus text-success"></i>
                                        </span>

                                        View all of your transactions
                                        in one place.

                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i class="fa-regular fa-square-plus text-success"></i>
                                        </span>
                                        Monitor expenditure and income.
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i class="fa-regular fa-square-plus text-success"></i>
                                        </span>
                                        Visualise data by type, such as Eating out, Groceries and many more.
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i class="fa-regular fa-square-plus text-success"></i>
                                        </span>
                                        Filter transactions by, date, account, income, expenditure and more.
                                    </li>

                                </ul>
                                <p className="mb-2">
                                    <small>
                                        <em>
                                            Note: This application requires the following from Google:
                                        </em>
                                    </small>
                                </p>

                                <ul className="fa-ul ms-5">
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa-solid fa-signature text-primary"></i>
                                        </span>
                                        <span className="small">
                                            Your name
                                        </span>
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa-regular fa-envelope-open text-primary"></i>
                                        </span>
                                        <span className="small">
                                            Your email address
                                        </span>
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa-solid fa-camera-retro text-primary"></i>
                                        </span>
                                        <span className="small">
                                            Your profile picture
                                        </span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center pt-4">
                                    <RegisterButton />
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

export default RegisterPage;
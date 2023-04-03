import RegisterButton from './RegisterButton';
import FlashMessage from "./FlashMessage";
import { Container, Row, Col } from 'react-bootstrap';

const RegisterPage = () => { 

    return (

        <section className="Register">
                <Container className="mt-sm-3 mt-lg-5">
                <Row>
                    <Col></Col>
                    <Col xs={12} md={10} lg={6} className="p-5 shadow-sm d-flex flex-column justify-content-center align-items-center text-justify bg-white">
                        
                        <h2 className="mb-5">Sign Up</h2>
                          
                        <p>
                            By signing up you'll be able to:
                        </p>
                        <p>
                            View all of your transactions
                            in one place.
                        </p>
                        <p>Monitor expenditure and income.</p>
                        <p>Visualise data by type, such as Eating out, Groceries and many more.</p>
                        <p>Filter transactions by, date, account, income, expenditure and more.</p>




                        <p>
                                Note: This application requires the following from Google:
                            </p>

                            <ul className="list-unstyled">
                                <li>Your name</li>
                                <li>Email address</li>
                                <li>Profile picture</li>
                            </ul>
                            
   

                        
                        <FlashMessage />
                        <RegisterButton/>
                    </Col>
                    <Col></Col>
                    </Row>
                </Container>


            
        </section>

    )

}

export default RegisterPage;
import RegisterButton from './RegisterButton';
import FlashMessage from "./FlashMessage";
import { Container, Row, Col } from 'react-bootstrap';

const RegisterPage = () => { 

    return (

        <section className="Register">
                <Container className="mt-sm-3 mt-lg-5">
                <Row>
                    <Col></Col>
                    <Col xs={12} md={10} lg={8} className="p-5 shadow-sm d-flex flex-column justify-content-center align-items-center bg-white">
                        
                        <h1>Register</h1>
                        <p>Register now to get the latest: </p>
                        <p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet culpa expedita non quis, impedit esse fugit,
                            quibusdam atque velit facere at nam exercitationem ex cum
                                temporibus, iusto voluptatum repellat cupiditate.
                            </span>
                            <span>Sapiente, tempora exercitationem, tenetur est
                                consequatur velit rerum adipisci temporibus quos,
                                debitis praesentium pariatur in illo? Tenetur ut
                                expedita deleniti voluptatum consequuntur, debitis
                                exercitationem quibusdam iste sapiente repellat ipsam
                                id!
                            </span>
                           
                        </p>
                        <FlashMessage />
                        <RegisterButton />
                    </Col>
                    <Col></Col>
                    </Row>
                </Container>


            
        </section>

    )

}

export default RegisterPage;
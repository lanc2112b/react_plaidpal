import { Container, Row, Col, Button } from "react-bootstrap";

const Error500 = () => {

    const navigateHome = () => {

        window.location.replace('/');
    }

    return (
        <>
            <section className="server-error d-flex align-items-end pb-4">
                <Container>
                    <Row>
                        <Col className="col col-10 offset-1 d-flex flex-column justify-content-center align-items-center p-4 error-page-message text-white text-center">
                            <h4 className="display-5"> Server Error </h4>
                            <p>Try the operation again, or check the data you're trying to send. No luck? Apologies, try again later or contact support.</p>
                            <Button variant="info" onClick={navigateHome}>
                                <i className="fas fa-house me-2"></i>
                                Home
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default Error500;
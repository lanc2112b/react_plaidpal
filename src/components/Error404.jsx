import { Container, Row, Col, Button } from "react-bootstrap";

const Error404 = () => {

    const navigateHome = () => {

        window.location.replace('/');
    }

    return (
        <>
            <section className="server-error d-flex align-items-end pb-4">
                <Container>
                    <Row>
                        <Col className="col col-10 offset-1 d-flex flex-column justify-content-center align-items-center p-4 error-page-message text-white text-center">
                            <h4 className="display-5"> Page Not Found </h4>
                            <p>Check the requested page and try again, alternatively use the nav bar above.</p>
                            <Button variant="info" onClick={navigateHome}>
                                <i className="fa-solid fa-left-long me-2"></i>
                            Go Back
                        </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default Error404;
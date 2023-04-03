import { Container, Row, Col, Button } from "react-bootstrap";

const Error404 = () => {

    return (
        <>
            <section className="server-error">
                <Container className="">
                    <Row>
                        <Col className="col col-12 d-flex justify-content-center align-items-center flex-fill">
                            <Button variant="danger" onClick={() => console.log("Danger")}>
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
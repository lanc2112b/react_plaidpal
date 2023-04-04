import { Container, Row, Col, Button } from "react-bootstrap";

const SummaryFilter = () => {

    const toggled = false;


    const filters = () => {

        console.log('something')

    }

    return (

        <>
            <Container className="mb-1 px-0">
                <Row className="gx-0 w-100">
                    <Col xs={1} >
                        <Button variant="danger" onClick={() => filters('')}>
                            <i className="fa-solid fa-calendar-days"></i>
                       </Button>
                    </Col> 
                    <Col xs={5} className="offset-1">
                        <Button variant="danger" onClick={() => console.log("Danger")}>
                            <i className="fa-solid fa-shop "></i>
                        </Button>
                    </Col>

                    <Col xs={2} className="justify-content-center d-none d-md-flex ps-5">
                        <Button variant="dark" onClick={() => console.log("Dark")}>
                            <i className="fa-solid fa-layer-group"></i>
                        </Button>
                    </Col>
                    <Col xs={2} className="justify-content-end d-flex pe-3">
                        <Button variant="dark" onClick={() => console.log("Dark")}>
                            <i className="fa-solid fa-sterling-sign"></i>
                        </Button>
                    </Col>
                    <Col xs={1} className=" justify-content-end d-flex">
                        {toggled ? 
                            <Button variant="dark" onClick={() => console.log("Dark")}>
                                <i className="fa-solid fa-arrow-up-wide-short"></i>
                            </Button>
                            :
                            <Button variant="dark" onClick={() => console.log("Dark")}>
                                <i className="fa-solid fa-arrow-down-wide-short"></i>

                            </Button>
                        }
                    </Col>

                </Row>

            </Container>


        </>

    )
}

export default SummaryFilter;
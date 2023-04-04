import { Card, Row, Col } from "react-bootstrap"

export default function TotalSpend() {

    return (
        <>
            <Card className="card flex-fill rounded-3 shadow-sm">
                <div className="d-flex flex-row">
                    <div className="chart-card-icon bg-info d-flex justify-content-center align-items-center"><i className="fa-solid fa-calendar-days"></i></div>
                    <Card.Header className="border-0 bg-white ms-5">Monthly Averages</Card.Header>
                </div>
                <Card.Body>
                    <Card.Title>
                    </Card.Title>
                    <Card.Text className="px-3">
                        <Row className="tracker-values">
                            <Col className="">
                                <dl>
                                    <dt className="small">
                                      Nov Expenses:   
                                    </dt>
                                    <dd className="small">
                                        £10654
                                    </dd>
                                    <dt className="small">
                                        Income:
                                    </dt>
                                    <dd className="small">
                                        £557
                                    </dd>
                                    <dt className="small">
                                        Month Total:
                                    </dt>
                                    <dd className="small">
                                        <em><span className="text-danger font-weight-bold">-£1097</span></em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col>
                                <dl>
                                    <dt className="small">
                                       Dec Expenses:
                                    </dt>
                                    <dd className="small">
                                        £10354
                                    </dd>
                                    <dt className="small">
                                        Income:
                                    </dt>
                                    <dd className="small">
                                        £645
                                    </dd>
                                    <dt className="small">
                                        Month Total:
                                    </dt>
                                    <dd className="small">
                                        <em><span className="text-danger font-weight-bold">-£9709</span></em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col>
                                <dl>
                                    <dt className="small">
                                      Jan Expenses:
                                    </dt>
                                    <dd className="small">
                                        £10890
                                    </dd>
                                    <dt className="small">
                                        Income:
                                    </dt>
                                    <dd className="small">
                                        £732
                                    </dd>
                                    <dt className="small">
                                        Month Total:
                                    </dt>
                                    <dd className="small">
                                        <em><span className="text-danger font-weight-bold">-£10158</span></em>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                    </Card.Text>
                   
                </Card.Body>
              
            </Card>
        </>
    )
}
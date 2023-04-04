import SummaryTransactionsList from "./SummaryTransactionsList";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getTransactions } from "../api/api";
import { Container, Row, Col } from "react-bootstrap";
import LoaderLarge from "./LoaderSmall";
import Donut from "./Donut";
import Barchart from "./Barchart";
import SummaryFilter from "./SummaryFilter";
import TotalSpend from "./TotalSpend";
import SummaryReminder from "./SummaryReminder";

const Summary = () => {
    const { user } = useContext(UserContext);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getTransactions(user.googleId)
            .then((results) => {
                setList(results);
                setLoading(false);
            })
            .catch((error) => {
            });

    }, [user.googleId]);

    if (loading) return <LoaderLarge content={"Loading transactions..."} />;
    //console.log(list, "summary 27");
    return (
        <>
            <Container className="p-0">
                <Row className="mh-25 py-3" >
                    <Col lg={4} className="d-flex mb-3">
                        <Donut list={list} />
                    </Col>
                    <Col lg={8} className="d-flex mb-3">
                        <Barchart list={list} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="d-flex mb-3">
                     <TotalSpend />   
                    </Col>
                    <Col lg={4} className="d-flex mb-3">
                        <SummaryReminder />
                    </Col>
                </Row>

                
            </Container>

            <SummaryFilter setList={setList} />
            {/** component for transaction list here */}
            <SummaryTransactionsList list={list} />
        </>
    );
};

export default Summary;
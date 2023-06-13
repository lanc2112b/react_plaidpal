import SummaryTransactionsList from "./SummaryTransactionsList";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { MessageContext } from "../contexts/Message";
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
    const { setMessage } = useContext(MessageContext);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(false);


    useEffect(() => {
        setLoading(true);
        getTransactions(user.googleId)
            .then((results) => {
                setList(results);
                setLoading(false);
            })
            .catch((error) => {
                if (error.code === 'ERR_BAD_RESPONSE') {

                    setMessage({
                        msgType: 'error',
                        showMsg: true,
                        title: 'Plaid API error',
                        msg: 'Error connecting to Plaid API, please try again later. If this message persists, please contact the administrator',
                        dismiss: true,
                    });
                    //console.log("done gone wrong")
                }
                setLoading(false);
                setApiError(true);
            });

    }, [user.googleId, setMessage]);

    if (loading) return <LoaderLarge content={"Loading transactions..."} />;
    if(apiError) return <></>;

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
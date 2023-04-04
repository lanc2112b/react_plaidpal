import {Container, Row, Col, Button} from "react-bootstrap";
import {getTransactions} from "../api/api";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/User";

const SummaryFilter = ({setList}) => {
    const {user} = useContext(UserContext);
    const [sort_by, setSort_by] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getTransactions(user.googleId, sort_by, sortOrder)
            .then((results) => {
                setList(results);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList, user.googleId, sort_by, sortOrder]);

    const sort = (column) => {
        setSort_by(column);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };
    return (
        <>
            {loading && (
                <h2 style={{textAlign: "center"}}>Loading transactions...</h2>
            )}
            <Container className="mb-1 px-0">
                <Row className="gx-0 w-100">
                    <Col xs={1}>
                        <Button variant="danger" onClick={() => sort("date")}>
                            <i className="fa-solid fa-calendar-days"></i>
                        </Button>
                    </Col>
                    <Col xs={5} className="offset-1">
                        <Button variant="danger" onClick={() => sort("name")}>
                            <i className="fa-solid fa-shop "></i>
                        </Button>
                    </Col>

                    <Col xs={2} className="justify-content-center d-none d-md-flex ps-5">
                        <Button variant="dark">
                            <i className="fa-solid fa-layer-group"></i>
                        </Button>
                    </Col>
                    <Col xs={2} className="justify-content-end d-flex pe-3">
                        <Button variant="dark" onClick={() => sort("amount")}>
                            <i className="fa-solid fa-sterling-sign"></i>
                        </Button>
                    </Col>
                    {/* <Col xs={1} className=" justify-content-end d-flex">
            <Button variant="dark" onClick={() => ordered(sortOrder)}>
              {sortOrder === "asc" ? (
                <i className="fa-solid fa-arrow-up-wide-short"></i>
              ) : (
                <i className="fa-solid fa-arrow-down-wide-short"></i>
              )}
            </Button>
          </Col> */}
                </Row>
            </Container>
        </>
    );
};

export default SummaryFilter;

import {Container, Row, Col, Button} from "react-bootstrap";
import {getTransactions} from "../api/api";
import {useContext, useEffect, useState} from "react";
import { UserContext } from "../contexts/User";
import LoaderSmall from './LoaderSmall';

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
                <LoaderSmall content={'Loading transactions...'} />
                
            )}
            
            <Container className="mb-1 px-0 mt-5">
                
                <Row className="gx-1 w-100">

                    <Col xs={3} sm={2} md={2}>
                        <Button size="sm" variant="danger" onClick={() => sort("date")}>
                            <i className="fa-solid fa-calendar-days"></i>
                        </Button>
                    </Col>
                    <Col xs={7} sm={6} md={6} className="ps-0">
                        <Button size="sm" variant="danger" onClick={() => sort("name")}>
                            <i className="fa-solid fa-shop "></i>
                        </Button>
                    </Col>

                    <Col xs={0} sm={3} md={2} className="justify-content-start d-none d-md-flex ps-2">
                        <Button size="sm" variant="dark">
                            <i className="fa-solid fa-layer-group"></i>
                        </Button>
                    </Col>
                    <Col xs={2} sm={1} md={2} className="justify-content-start d-flex ps-lg-2">
                        <Button size="sm" className="px-2  ms-lg-5" variant="dark" onClick={() => sort("amount")}>
                            <i className="fa-solid fa-sterling-sign mx-1"></i>
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

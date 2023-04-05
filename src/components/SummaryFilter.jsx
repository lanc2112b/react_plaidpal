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
            <div class="position-fixed sticky-top text-nowrap rounded-3 p-1 m-3 bg-info opacity-50">
                <div class="d-block d-sm-none">Extra Small (xs)</div>
                <div class="d-none d-sm-block d-md-none">Small (sm)</div>
                <div class="d-none d-md-block d-lg-none">Medium (md)</div>
                <div class="d-none d-lg-block d-xl-none">Large (lg)</div>
                <div class="d-none d-xl-block d-xxl-none">X-Large (xl)</div>
                <div class="d-none d-xxl-block">XX-Large (xxl)</div>
            </div>
            <Container className="mb-1 px-0 mt-5">
                
                <Row className="gx-1 w-100">

                    <Col xs={2} sm={2} md={2} >
                        <Button size="sm" variant="danger" onClick={() => sort("date")}>
                            <i className="fa-solid fa-calendar-days"></i>
                        </Button>
                    </Col>
                    <Col xs={8} sm={8} md={6} className="ps-4 ps-sm-3 ps-md-0">
                        <Button size="sm" variant="danger" onClick={() => sort("name")}>
                            <i className="fa-solid fa-shop "></i>
                        </Button>
                    </Col>

                    <Col xs={0} sm={3} md={2} className="justify-content-start d-none d-md-flex ps-2">
                        <Button size="sm" variant="dark">
                            <i className="fa-solid fa-layer-group"></i>
                        </Button>
                    </Col>
                    <Col xs={2} sm={1} md={2} className="justify-content-start d-flex ps-sm-2 ps-md-4 ps-lg-3 ps-xl-4 ps-xxl-4">
                        <Button size="sm" className="px-2 ms-md-2 ms-lg-4" variant="dark" onClick={() => sort("amount")}>
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

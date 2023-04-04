import SummaryTransactionsList from "./SummaryTransactionsList";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/User";
import {getTransactions} from "../api/api";
import LoaderSmall from "./LoaderSmall";
import Donut from "./Donut";
import TotalSpend from "./TotalSpend";
import Barchart from "./Barchart";


const Summary = () => {
    const { user } = useContext(UserContext);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getTransactions(user.googleId)
            .then((results) => {
                setList(results);
            }).catch((error) => {
        });
        setLoading(false);

    }, [user.googleId]);
    console.log(list)

    if (loading) return <LoaderSmall content={"Loading transactions..."} />;

    return (
        <>
           
            {/** component for visualisation here */}
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <Donut list={list} />
                </div>
                <div className="col">
                    <TotalSpend/>
                </div>
                <div className="col">
                    <Barchart list={list}/>
                </div>
            </div>
            {/** component for transaction list here */}
            <SummaryTransactionsList list={list} />
        </>
    )
}

export default Summary;
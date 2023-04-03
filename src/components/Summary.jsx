import SummaryTransactionsList from "./SummaryTransactionsList";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/User";
import {getTransactions} from "../api/api";
import LoaderSmall from "./LoaderSmall";
import Donut from "./Donut";


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

    if(loading) return (<LoaderSmall content={"Loading transactions..."} />);
    return (
        <>
           
            {/** component for visualisation here */}
            <Donut list={list}/>


            {/** component for transaction list here */}
            <SummaryTransactionsList list={list} loading={loading} />
        </>
    )
}

export default Summary;
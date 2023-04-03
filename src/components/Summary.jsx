import SummaryTransactionsList from "./SummaryTransactionsList";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/User";
import {getTransactions} from "../api/api";


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
    return (
        <>
           
            {/** component for visualisation here */}

            {/** component for transaction list here */}
            <SummaryTransactionsList list={list} loading={loading} />
        </>
    )
}

export default Summary;
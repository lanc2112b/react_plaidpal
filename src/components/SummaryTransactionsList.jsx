import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/User';
import { getTransactions } from '../api/api';
import { Table } from 'react-bootstrap';
import SummaryTransactionCard from './SummaryTransactionCard';
import LoaderSmall from './LoaderSmall';

const SummaryTransactionsList = () => {

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
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th className="table-col-first">ID</th>
                        <th>Date</th>
                        <th>Merchant</th>
                        <th className="d-none d-md-table-cell">Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody className="small">
                    {list.map((element) => {
                        return (<tr><SummaryTransactionCard key={element.transaction_id} transaction={element} /></tr>)
                    })}
                </tbody>
            </Table>
        </>
    )


 }

export default SummaryTransactionsList;

/**
 * {
        "account_id": "LZ1wReq5xAcrPpJovq1yf9EM6LKeE1SeyRGpP",
        "account_owner": null,
        "amount": 12,
        "authorized_date": "2022-02-01",
        "authorized_datetime": null,
        "category": [
            "Food and Drink",
            "Restaurants",
            "Fast Food"
        ],
        "category_id": "13005032",
        "check_number": null,
        "date": "2022-02-01",
        "datetime": null,
        "iso_currency_code": "GBP",
        "location": {
            "address": null,
            "city": null,
            "country": null,
            "lat": null,
            "lon": null,
            "postal_code": null,
            "region": null,
            "store_number": "3322"
        },
        "merchant_name": "McDonald's",
        "name": "McDonald's",
        "payment_channel": "in store",
        "payment_meta": {
            "by_order_of": null,
            "payee": null,
            "payer": null,
            "payment_method": null,
            "payment_processor": null,
            "ppd_id": null,
            "reason": null,
            "reference_number": null
        },
        "pending": false,
        "pending_transaction_id": null,
        "personal_finance_category": null,
        "transaction_code": null,
        "transaction_id": "E4PWzdk5lLCWzwlrpnPbsVjng9v4JrCgG5p5d",
        "transaction_type": "place",
        "unofficial_currency_code": null
    }
 */
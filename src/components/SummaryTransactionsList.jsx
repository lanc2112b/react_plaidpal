import { Table } from 'react-bootstrap';
import SummaryTransactionCard from './SummaryTransactionCard';
import LoaderSmall from './LoaderSmall';

const SummaryTransactionsList = ({list,loading}) => {



    if(loading) return (<LoaderSmall content={"Loading transactions..."} />);

    const clickHandler = (clickValue) => {
        console.log(clickValue);
        /** do click handler stuff here
         * open a single transaction page
         * or a modal
        */

    }

    return (
        <>
            <div className='card'>
            <Table responsive striped hover className="shadow-sm" size="sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Merchant</th>
                        <th className="d-none d-md-table-cell">Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody >
                    {list.map((element) => {
                        return (<tr onClick={() => { clickHandler(element.transaction_id) }} key={element.transaction_id}><SummaryTransactionCard transaction={element} loading={loading} /></tr>)
                    })}
                </tbody>
            </Table>
            </div>
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
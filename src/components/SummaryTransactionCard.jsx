//import { Button } from "react-bootstrap";
import {DateTime} from 'luxon';

const SummaryTransactionCard = ({transaction}) => {

    const currencySymbol = {GBP: '£', USD: '$', EUR: '€'}; /// etc...
    const useSymbol = currencySymbol[transaction.iso_currency_code]

    return (
        <>
            <td className="align-middle">
                {DateTime.fromISO(transaction.date).toLocaleString(
                    DateTime.DATE
                )}
            </td>
            <td className="align-middle">{transaction.name}</td>
            <td className="align-middle d-none d-md-table-cell">{transaction.category[0]}</td>
            <td className="align-middle">{useSymbol}{transaction.amount.toFixed(2)}</td>
        </>
    )
}

export default SummaryTransactionCard;
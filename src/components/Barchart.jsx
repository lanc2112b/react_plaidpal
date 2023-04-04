import {Card} from "react-bootstrap";
import {Bar} from "react-chartjs-2";

export default function Barchart({list}) {

    const categories = ['Food and Drink', 'Shops', 'Transfer', 'Travel', 'Payment', 'Recreation'];
    const months = ['08', '09', '10'];

    const colourObj = {
        'Food and Drink': "hsla(210, 64%, 60%, 1)",
        'Shops': "hsla(20, 79%, 57%, 1)",
        'Transfer': "hsla(160, 74%, 38%, 1)",
        'Travel': "hsla(342, 82%, 61%, 1)",
        'Payment': "hsla(269, 54%, 59%, 1)",
        'Recreation': "hsla(52, 100%, 49%, 1 )",
    };

    const getSpendingByCategory = () => {
        const spendingByCategory = {};

        categories.forEach((category) => {
            spendingByCategory[category] = {
                '08': 0,
                '09': 0,
                '10': 0
            };
        });

        // Add up transaction amounts for each category and month
        list.forEach((transaction) => {
            const category = transaction.category[0];
            console.log(category)
            const month =transaction.date.substring(5, 7);
            console.log(month, 'month')
            const amount = transaction.amount;
            console.log(amount, 'amount')
            if (!spendingByCategory[category][month]) {spendingByCategory[category][month]=0}
            spendingByCategory[category][month] += amount;
            console.log(spendingByCategory, 'big log')

        });

        // Convert spendingByCategory object to array of datasets
        return categories.map((category) => {
            return {
                label: category,
                data: [
                    spendingByCategory[category]['08'],
                    spendingByCategory[category]['09'],
                    spendingByCategory[category]['10']
                ],
                backgroundColor: colourObj[category]

            };
        });
    };


    const getDatasets = () => {
        const spendingByCategory = getSpendingByCategory();
        const datasets = [];

        categories.forEach((category) => {
            datasets.push({
                label: category,
                data: spendingByCategory[category],
                backgroundColor: colourObj[category],
            });
        });
console.log(datasets, 'datasets')
        return datasets;

    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Total Spending by Category',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const data = {
        labels: months,
        datasets: getDatasets(),
    };

    return (
        <>
            <Card className="card mb-4 rounded-3 shadow-sm">
                <Card.Body>
                    <Card.Title>Total Monthly Spend</Card.Title>
                    <Card.Text>
                        <Bar options={options} data={data}/>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}


// {
//     "account_id": "1xND5GvV4GHok4zJvnoxIpw6ZqkG5WtqqmVd5",
//     "account_owner": null,
//     "amount": 12,
//     "authorized_date": "2022-02-01",
//     "authorized_datetime": null,
//     "category": [
//     "Food and Drink",
//     "Restaurants",
//     "Fast Food"
// ],
//     "category_id": "13005032",
//     "check_number": null,
//     "date": "2022-02-01",
//     "datetime": null,
//     "iso_currency_code": "GBP",
//     "location": {
//     "address": null,
//         "city": null,
//         "country": null,
//         "lat": null,
//         "lon": null,
//         "postal_code": null,
//         "region": null,
//         "store_number": "3322"
// },
//     "merchant_name": "McDonald's",
//     "name": "McDonald's",
//     "payment_channel": "in store",
//     "payment_meta": {
//     "by_order_of": null,
//         "payee": null,
//         "payer": null,
//         "payment_method": null,
//         "payment_processor": null,
//         "ppd_id": null,
//         "reason": null,
//         "reference_number": null
// },
//     "pending": false,
//     "pending_transaction_id": null,
//     "personal_finance_category": null,
//     "transaction_code": null,
//     "transaction_id": "B8GgAQaZDQHjwVDx15jgcajJoV86ErCzA8LJJ",
//     "transaction_type": "place",
//     "unofficial_currency_code": null
// }



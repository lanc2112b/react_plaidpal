import {Card} from "react-bootstrap";
import {Doughnut} from "react-chartjs-2";

export default function Donut({list}) {

    const allLabels = labelMap(list);
    const labels = [...new Set(allLabels)];

    function labelMap(list) {
        let allLabels = [];
        list.forEach((item) => {
            allLabels.push(item.category[0]);
        });
        return allLabels;
    }

    const count = allLabels.reduce((acc, item) => {
        if (acc[item]) {
            acc[item] += 1;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});
    const result = Object.entries(count).reduce((acc, [key, value]) => {
        acc.push({item: key, count: value});
        return acc;
    }, []);


    const dataSet = [result[0]?.count || 0,
        result[1]?.count || 0,
        result[2]?.count || 0,
        result[3]?.count || 0,
        result[4]?.count || 0,
        result[5]?.count || 0,
    ];

    function prepColors(data) {

        const colourArr = [
            "hsla(210, 64%, 60%, 1)",
            "hsla(20, 79%, 57%, 1)",
            "hsla(160, 74%, 38%, 1)",
            "hsla(342, 82%, 61%, 1)",
            "hsla(269, 54%, 59%, 1)",
            "hsla(52, 100%, 49%, 1 )",
            "hsla(217,100%,58%)",
            "hsla(23,74%,43%,0.65)",
            "hsla(10,100%,50%)",
            "hsla(134,65%,51%)",
        ];

        const count = result.length;

        const slicedArray = colourArr.slice(0, count);

        return slicedArray;

    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Percentage",
                data: dataSet,
                backgroundColor: prepColors(),
                borderColor: prepColors(),
                borderWidth: 1,
                width: 120,
                height: 120,
            },
        ],
    };

    return (
        <>
            <Card className="card mb-4 rounded-3 shadow-sm">
                <Card.Body>
                    <Card.Title>Spending by categories</Card.Title>
                    {/** options={...}*/}
                    {/*{...props}*/}
                    <Doughnut data={data}/>
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
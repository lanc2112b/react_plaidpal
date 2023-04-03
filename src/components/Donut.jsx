import {Card} from "react-bootstrap";
import {Doughnut} from "react-chartjs-2";
import {useEffect} from "react";

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

    const colourArr = [
        "hsla(210, 64%, 60%, 1)",
        "hsla(20, 79%, 57%, 1)",
        "hsla(160, 74%, 38%, 1)",
        "hsla(342, 82%, 61%, 1)",
        "hsla(269, 54%, 59%, 1)",
        "hsl(52,100%,49%)",
    ];

    const count = allLabels.reduce((acc, item) => {
        if (acc[item]) {
            acc[item] += 1;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {});
    const result = Object.entries(count).reduce((acc, [key, value]) => {
        acc.push({ item: key, count: value });
        return acc;
    }, []);
    console.log(result);

    const dataSet = [
        result[0].count,
        result[1].count,
        result[2].count,
        result[3].count,
        result[4].count,
        result[5].count,
    ]

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Percentage",
                data: dataSet,
                backgroundColor: colourArr,
                borderColor: colourArr,
                borderWidth: 1,
                width: 120,
                height: 120,
            },
        ],
    };

    return (
        <>
            {/*{list.map((element) => {*/}
            {/*    console.log(list)*/}
            {/*})}*/}
            <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
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
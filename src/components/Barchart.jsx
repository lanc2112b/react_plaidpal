import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
export default function Barchart({ list }) {
  const categories = [
    "Food and Drink",
    "Shops",
    "Transfer",
    "Travel",
    "Payment",
    "Recreation",
  ];
  const months = ["08", "09", "10"];
  const colourObj = {
    "Food and Drink": "hsla(210, 64%, 60%, 1)",
    Shops: "hsla(20, 79%, 57%, 1)",
    Transfer: "hsla(160, 74%, 38%, 1)",
    Travel: "hsla(342, 82%, 61%, 1)",
    Payment: "hsla(269, 54%, 59%, 1)",
    Recreation: "hsla(52, 100%, 49%, 1 )",
  };
  const getSpendingByCategory = () => {
    const spendingByCategory = {};
    categories.forEach((category) => {
      spendingByCategory[category] = {
        "08": 0,
        "09": 0,
        10: 0,
      };
    });
    // Add up transaction amounts for each category and month
    list.forEach((transaction) => {
      const category = transaction.category[0];
      //console.log(category);
      const month = transaction.date.substring(5, 7);
      //console.log(month, "month");
      const amount = transaction.amount;
      //console.log(amount, "amount");
      if (!spendingByCategory[category][month]) {
        spendingByCategory[category][month] = 0;
      }
      spendingByCategory[category][month] += amount;
      //console.log(spendingByCategory, "big log");
    });
    // Convert spendingByCategory object to array of datasets
    return categories.map((category) => {
      return {
        label: category,
        data: [
          spendingByCategory[category]["08"],
          spendingByCategory[category]["09"],
          spendingByCategory[category]["10"],
        ],
        backgroundColor: colourObj[category],
      };
    });
  };
  const getDatasets = () => {
    const spendingByCategory = getSpendingByCategory();
    const datasets = [];
    categories.forEach((category) => {
      const categoryData = spendingByCategory.filter(
        (data) => data.label === category
      )[0];
      datasets.push({
        label: category,
        data: [
          categoryData.data[0],
          categoryData.data[1],
          categoryData.data[2],
        ],
        backgroundColor: colourObj[category],
      });
    });
    return datasets;
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Total Spending by Category",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
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
      <Card className="rounded-3 shadow-sm flex-fill">
        <Card.Body>
          <Card.Title>Total Monthly Spend</Card.Title>
          <Card.Text>
            <Bar options={options} data={data} height={350}/>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

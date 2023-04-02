import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

const ReactCharts2Examples = () => {

/*     const colourArr = [
        "hsla(87, 12%, 51%, 1)",
        "hsla(224, 19%, 27%, 1)",
        "hsla(116, 24%, 70%, 1)",
        "hsla(118, 24%, 58%, 1)",
        "hsla(256, 9%, 32%, 1)",
    ]; */

    const data = [
        ["Spending", "£'s"],
        ["Gym", 30],
        ["Utilities", 10],
        ["Groceries", 40],
        ["MagicBeans", 10],
        ["Fuel", 10],
    ];

    const options = {
        title: "Spending this month...",
        
    };

    return (<>

        <section className="rc2-examples">
            <p><Link to="https://www.react-google-charts.com/examples/bar-chart"> More example usage here</Link></p>
            <div className="row mt-5 justify-content-evenly"> {/** Using Container > Row > Column may be better to colapse cards on mobile a little easier and allows 4 col / 8col layouts on larger screens etc */}

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3 ">
                    <div className="chart-card-icon bg-primary d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-pie"></i></div>
                    <Card.Body>
                        <Card.Title>Pie</Card.Title>
                        {/** options={...}*/}
                        {/*{...props}*/}
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"auto"}
                        />
                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-success d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-pie"></i></div>
                    <Card.Body>
                        <Card.Title>3d Pie</Card.Title>
                        {/** options={...}*/}
                        {/*{...props}*/}
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={{ ...options, is3D: true, }}
                            width={"100%"}
                            height={"auto"}
                        />
                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-warning d-flex justify-content-center align-items-center"><i className="fa-regular fa-chart-bar"></i></div>
                    <Card.Body>
                        <Card.Title>Bar Horz.</Card.Title>
                        {/** options={...}*/}
                        {/*{...props}*/}
                        <Chart
                            chartType="BarChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"auto"}
                        />
                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-info d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-simple"></i></div>
                    <Card.Body>
                        <Card.Title>Bar Vert.</Card.Title>
                        {/** options={...}*/}
                        {/*{...props}*/}
                        <Chart
                            chartType="Bar"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"auto"}
                        />
                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-11 col-lg-6 col-xl-5">
                    <div className="chart-card-icon bg-danger d-flex justify-content-center align-items-center"><i className="fa-solid fa-gauge"></i></div>
                    <Card.Body>
                        <Card.Title>Gauges</Card.Title>
                        {/** options={...}*/}
                        {/*{...props}*/}
                        <Chart
                            chartType="Gauge"
                            data={data}
                            options={{
                                ...options, width: 400,
                                height: 120,
                                redFrom: 90,
                                redTo: 100,
                                yellowFrom: 75,
                                yellowTo: 90,
                                minorTicks: 5, }}
                            width={"100%"}
                            height={"auto"}
                        />
                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5  col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-dark d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-line"></i></div>
                    <Card.Body>
                        <Card.Title>Line, needs more data</Card.Title>
                        {/** options={...}*/}
                        {/*{...props}*/}
                        <Chart
                            chartType="LineChart"
                            data={data}
                            options={{
                                ...options, curveType: "function",
                                legend: { position: "bottom" }, }}
                            width={"100%"}
                            height={"auto"}
                        />
                    </Card.Body>
                </Card>

                
                
            </div>

        </section>
    </>)
}

export default ReactCharts2Examples;


import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut, Pie, Bar, Line, Bubble, Scatter, Radar, PolarArea } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend);

const ReactCharts2Examples = () => { 
/**
 * 
 * #5899DA
 * #E8743B
 * #19A979
 * #ED4A7B
 * #945ECF
 */
    
    const colourArr = [
        "hsla(210, 64%, 60%, 1)",
        "hsla(20, 79%, 57%, 1)",
        "hsla(160, 74%, 38%, 1)",
        "hsla(342, 82%, 61%, 1)",
        "hsla(269, 54%, 59%, 1)",
    ];

    const labels = ['Gym',
        'Utilities',
        'Groceries',
        'MagicBeans',
        'Fuel']
    
    const dataSet = [
            30,
            10,
            40,
            10,
            10,
    ]

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Stuff",
                data: dataSet,
                backgroundColor: colourArr,
                borderColor: colourArr,
                borderWidth: 1,
                width: 120,
                height: 120,
            },
        ],
    };

    return (<>

        <section className="rc2-examples">
            <p><Link to="https://react-chartjs-2.js.org/examples"> Example usage here</Link></p>
            <div className="row mt-5 justify-content-evenly"> {/** Using Container > Row > Column may be better to colapse cards on mobile a little easier and allows 4 col / 8col layouts on larger screens etc */}

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-primary d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-pie"></i></div>
                    <Card.Body>
                        <Card.Title>Doughnut</Card.Title>
                        {/** options={...}*/}
                        {/*{...props}*/}
                        <Doughnut data={data} />
                        
                    </Card.Body>
                    
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-success d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-pie"></i></div>
                    <Card.Body>
                        <Card.Title>Pie</Card.Title>
                        <Card.Text>
                            <Pie data={data} />
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-warning  d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-simple"></i></div>
                    <Card.Body>
                        <Card.Title>Bar</Card.Title>
                        <Card.Text>
                            <Bar data={data} />
                        </Card.Text>

                    </Card.Body>
                </Card>

                
                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-danger d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-line"></i></div>
                    <Card.Body>
                        <Card.Title>Line</Card.Title>
                        <Card.Text>
                            <Line data={data} />
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                   
                    <div className="chart-card-icon bg-info d-flex justify-content-center align-items-center"><i className="fa-solid fa-compass"></i></div>
                    <Card.Body>
                        <Card.Title>PolarArea</Card.Title>
                        <Card.Text>
                            <PolarArea data={data} />
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-light d-flex justify-content-center align-items-center"><i className="fa-brands fa-uncharted text-dark"></i></div>
                    <Card.Body>
                        <Card.Title>Radar</Card.Title>
                        <Card.Text>
                            <Radar data={data} />
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-dark d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-simple"></i></div>
                    <Card.Body>
                        <Card.Title>Bubble</Card.Title>
                        <Card.Text>
                            <Bubble data={data} />
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card className="shadow-sm border-0 me-2 mb-5 col col-12 col-md-5 col-lg-3">
                    <div className="chart-card-icon bg-white d-flex justify-content-center align-items-center"><i className="fa-solid fa-chart-simple text-warning"></i></div>
                    <Card.Body>
                        <Card.Title>Scatter</Card.Title>
                        <Card.Text>
                            <Scatter data={data} />
                        </Card.Text>

                    </Card.Body>
                </Card>
                
            </div>

        </section>
    </>)
}

export default ReactCharts2Examples; 


/* function prepColors(data) {

    const colourArr = [
        "hsla(87, 12%, 51%, 1)",
        "hsla(224, 19%, 27%, 1)",
        "hsla(116, 24%, 70%, 1)",
        "hsla(118, 24%, 58%, 1)",
        "hsla(256, 9%, 32%, 1)",
        "hsla(5, 6%, 41%, 1)",
        "hsla(218, 23%, 40%, 1)",
        "hsla(240, 15%, 32%, 1)",
        "hsla(9, 12%, 55%, 1)",
        "hsla(85, 22%, 40%, 1)",
    ];

    const count = data.length;

    const slicedArray = colourArr.slice(0, count);

    return slicedArray;

} */
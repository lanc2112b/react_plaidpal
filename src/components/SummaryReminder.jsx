import { Card } from "react-bootstrap"

export default function SummaryReminder() {

    return (
        <>
            <Card className="card flex-fill rounded-3 shadow-sm">
                <div className="d-flex flex-row">
                <div className="chart-card-icon bg-success d-flex justify-content-center align-items-center"><i className="fa-solid fa-calendar-days"></i></div>
                    <Card.Header className="border-0 bg-white ms-5">Latest Reminder</Card.Header>
                </div>
                <Card.Body>
                    <Card.Title>
                    </Card.Title>
                    <Card.Text>
                        <h5>14/01/2022</h5>
                        <p>£500 @ KFC????? Where's this transaction from, ring the bank first thing!</p>
                    </Card.Text>
                   
                </Card.Body>
              
            </Card>
        </>
    )
}
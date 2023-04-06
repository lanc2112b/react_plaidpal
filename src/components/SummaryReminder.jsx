import { Card } from "react-bootstrap"

export default function SummaryReminder() {

    return (
        <>
            <Card className="card flex-fill rounded-3 shadow-sm mb-3">
                <div className="d-flex flex-row">
                <div className="chart-card-icon bg-success d-flex justify-content-center align-items-center"><i className="fa-solid fa-calendar-days"></i></div>
                    <Card.Header className="border-0 bg-white ms-5">Latest Reminder</Card.Header>
                </div>
                <Card.Body>
                    <Card.Title>
                    </Card.Title>
                    <Card.Header className="border-0 bg-white h5 ps-0">14/01/2022</Card.Header>
                        
                       <Card.Text className="ps-2">£500 @ KFC????? Where's this transaction from, ring the bank first thing!</Card.Text>
                    
                   
                </Card.Body>
              
            </Card>
        </>
    )
}
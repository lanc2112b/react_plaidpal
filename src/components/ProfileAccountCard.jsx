import { Card, Button } from "react-bootstrap";
const ProfileAccountCard = ({account}) => {
    return (
        <>
            <Card className="d-flex flex-row align-items-center border-0 shadow-sm my-4">
                <Card.Img variant="top" src="/Master-Card-icon.png" className="account-card" />
                <Card.ImgOverlay className="m-0 p-0">
                    <Card.Title className="text-white">.</Card.Title>
                </Card.ImgOverlay>
                <Card.Body className="d-flex flex-row align-items-center justify-content-between p-2 ">
                    <Card.Text className="my-0 mx-3">{account.name}</Card.Text>
                    <Button variant="warning" onClick={() => console.log('Something')}> {/** Callback for account deletion here */}
                        <i className="fa-solid fa-folder-minus me-2"></i>
                        Remove Account
                    </Button>
                </Card.Body>
            </Card>
        
        </>
    )
}

export default ProfileAccountCard;
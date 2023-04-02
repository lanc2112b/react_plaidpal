import { Card, Button } from "react-bootstrap";

const ProfileAccountCard = ({ account }) => {

    const currencySymbol = { GBP: '£', USD: '$', EUR: '€' }; /// etc... 
    const useSymbol = currencySymbol[account.balances.iso_currency_code]

    return (
        <>
            <Card className="d-flex flex-row align-items-center border-0 shadow-sm my-4">
                <Card.Img variant="top" src="/Master-Card-icon.png" className="account-card" />
                <Card.ImgOverlay className="m-0 p-0">
                    <Card.Title className="text-white">.</Card.Title>
                </Card.ImgOverlay>
                <Card.Body className="d-flex flex-row align-items-center justify-content-between p-2 ">
                    <Card.Text className="my-0 mx-3">{account.name}</Card.Text>
                    <Card.Text className="my-0 ms-auto me-3">Bal: {useSymbol}{account.balances.current}</Card.Text>
                                
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
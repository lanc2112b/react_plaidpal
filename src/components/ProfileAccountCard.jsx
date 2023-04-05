import { Card, Button } from "react-bootstrap";

const ProfileAccountCard = ({ account, accountDeleteHandler }) => {

    const currencySymbol = { GBP: '£', USD: '$', EUR: '€' }; /// etc... 
    const useSymbol = currencySymbol[account.balances.iso_currency_code];

    //console.log(account.account_id)

    return (
        <>
            <Card className="d-flex flex-row align-items-center border-0 shadow-sm my-4">
                <Card.Img variant="top" src="/Master-Card-icon.png" className="account-card" />
                <Card.ImgOverlay className="m-0 p-0 w-25">
                    <Card.Title className="text-white">.</Card.Title>
                </Card.ImgOverlay>
                <Card.Body className="d-flex flex-row align-items-center justify-content-between p-2 ">
                    <Card.Text className="my-0 mx-3 small">{account.name}</Card.Text>
                    <Card.Text className="my-0 ms-auto me-3 small">Bal: {useSymbol}{account.balances.current.toFixed(2)}</Card.Text>
                                
                    <Button variant="warning" onClick={() => { accountDeleteHandler(account.account_id) }}>
                        <i className="fa-solid fa-trash-can me-0 me-md-2"></i><span className="d-none d-md-inline">Account</span>
                    </Button>
                </Card.Body>
            </Card>
        
        </>
    )
}

export default ProfileAccountCard;
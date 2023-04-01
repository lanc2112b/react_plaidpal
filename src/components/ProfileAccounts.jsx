import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ProfileAccountCard from "./ProfileAccountCard";
import LoaderSmall from './LoaderSmall';
import { getAccounts } from "../api/api";

const ProfileAccounts = ({token}) => {
    /** Accounts list here */
    const [accountList, setAccountList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAccounts(token)
            .then((results) => {
                setAccountList(results);
            });
        setLoading(false);

    }, [token]);

    if(loading) return (<LoaderSmall content={"Loading Accounts..."} />);

    return (

        <Col xs={12} lg={6} className="profile-accounts rounded pt-0 pt-2 mt-4 mt-lg-0 border-top border-light shadow-sm">


            <Button variant="success" className="mb-2">
                <i className="fa-solid fa-circle-plus me-2"></i>
                Add Account {/** Trigger the Plaid popup here. Maybe extract the functionality to use anywhere */}
            </Button>
            
            {/** Loop through accounts accounnts.map */}
            
            {accountList.map((element) => {
                return <ProfileAccountCard key={element.account_id} account={element} />
            })}
        </Col>
    )
}

export default ProfileAccounts;
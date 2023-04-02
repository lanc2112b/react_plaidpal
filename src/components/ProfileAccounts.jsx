import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ProfileAccountCard from "./ProfileAccountCard";
import LoaderSmall from './LoaderSmall';
import { getAccounts, createLinkToken, tokenExchange, authUser } from "../api/api";
import { usePlaidLink } from 'react-plaid-link';

const ProfileAccounts = ({ googleId }) => {
    /** Accounts list here */
    const [accountList, setAccountList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [linkToken, setLinkToken] = useState(null);
    const [publicToken, setPublicToken] = useState(null);
    const [addAccount, setAddAccount] = useState(false);
    const [account, setAccount] = useState();

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            setPublicToken(public_token);

            console.log('success ', public_token, metadata);
            // send public_token to server
        },
    })


    /** triggered on reload  */
    useEffect(() => {
        createLinkToken()
            .then((result) => {
                setLinkToken(result.link_token);
                //console.log('response: ', result);
            })
    }, []);

    /** public token success*/
    useEffect(() => {
        console.log('pt in useEff', publicToken)
        if (publicToken) {

            const obj = {
                token: publicToken,
                googleId: googleId,
            };
            
            tokenExchange(obj)
                .then((results) => {
                    console.log('accessToken: ', results);
                    return authUser()
                }).then((results) => {
                    console.log(results);
                })
        }
    },[publicToken])

    console.log('Pub Token after exchange: ', publicToken);
    /** triggered reload */
    useEffect(() => {
        setLoading(true);
        getAccounts(googleId)
            .then((results) => {
                setAccountList(results);
            });
        setLoading(false);

    }, [googleId]);

    if(loading) return (<LoaderSmall content={"Loading Accounts..."} />);
    //console.log(accountList)
    return (

        <Col xs={12} lg={6} className="profile-accounts rounded pt-0 pt-2 mt-4 mt-lg-0 border-top border-light shadow-sm">

            {ready ? 
            <Button variant="success" className="mb-2 ms-2" onClick={open}>
                <i className="fa-solid fa-circle-plus me-2"></i>
                Add Account {/** Trigger the Plaid popup here. Maybe extract the functionality to use anywhere */}
                </Button>
            : ''}
            
            {/** Loop through accounts accounnts.map */}
            
            {accountList.map((element) => {
                return <ProfileAccountCard key={element.account_id} account={element} />
            })}
        </Col>
    )
}

export default ProfileAccounts;
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ProfileAccountCard from "./ProfileAccountCard";
import LoaderSmall from './LoaderSmall';
import { getAccounts, createLinkToken, tokenExchange, deleteAccountById } from "../api/api";
import { usePlaidLink } from 'react-plaid-link';

const ProfileAccounts = ({ googleId }) => {
    /** Accounts list here */
    const [accountList, setAccountList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [linkToken, setLinkToken] = useState(null);
    const [publicToken, setPublicToken] = useState(null);

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            setPublicToken(public_token);
        },
    });

    const accountDeleteHandler = (value) => {

        //console.log(value);
        deleteAccountById(googleId, value)
            .then((result) => {
                //console.log(accountList);
                
                    const filtered = accountList.filter((element) => {
                        return element.account_id !== value;
                    });  
                    
                  //console.log(filtered)  
                  setAccountList(filtered);    
                
            }).catch((error) => {
                console.log(error);
            });

    }
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
        //console.log('pt in useEff', publicToken)
        if (publicToken) {

            const obj = {
                token: publicToken,
                googleId: googleId,
            };
            
            tokenExchange(obj)
                .then((results) => {
                    console.log('accessToken: ', results);
                    window.location.replace('/profile')
                }).catch((error) => {
                    console.log(error);
                });
        }
    }, [publicToken, googleId])

    //console.log('Pub Token after exchange: ', publicToken);
    
    /** triggered reload */
    useEffect(() => {
        setLoading(true);
        getAccounts(googleId)
            .then((results) => {
                setAccountList(results);
                //setDeletedAccount(false);
            });
        setLoading(false);

    }, [googleId]);

    if(loading) return (<LoaderSmall content={"Loading Accounts..."} />);
    //console.log(accountList)
    return (

        <Col xs={12} lg={6} className="profile-accounts rounded pt-0 pt-2 mt-4 mt-lg-0 border-top border-light shadow-sm">

            {ready ? 
            <Button variant="success" className="mb-2 ms-2" onClick={open}>
                    <i className=" const filtered = accountList.filter((element) => {
                        return element.account_id !== value;
                   }) fa-solid fa-circle-plus me-2"></i>
                Add Account {/** Trigger the Plaid popup here. Maybe extract the functionality to use anywhere */}
                </Button>
            : ''}
            
            {/** Loop through accounts accounnts.map */}
            
            {accountList.map((element) => {
                return <ProfileAccountCard key={element.account_id} account={element} accountDeleteHandler={accountDeleteHandler} />
            })}
        </Col>
    )
}

export default ProfileAccounts;
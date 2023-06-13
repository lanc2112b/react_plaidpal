import { useEffect, useState, useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { Button, Col } from "react-bootstrap";
import ProfileAccountCard from "./ProfileAccountCard";
import LoaderSmall from './LoaderSmall';
import { getAccounts, createLinkToken, tokenExchange, deleteAccountById } from "../api/api";
import { usePlaidLink } from 'react-plaid-link';

const ProfileAccounts = ({ googleId }) => {

    const { setMessage } = useContext(MessageContext);
    /** Accounts list here */
    const [accountList, setAccountList] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [buttonReady, setButtonReady] = useState(false);

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
            .catch((error) => {
                if (error.code === 'ERR_BAD_RESPONSE') {

                    setMessage({
                        msgType: 'error',
                        showMsg: true,
                        title: 'Plaid API error',
                        msg: 'Error connecting to Plaid API, please try again later. If this message persists, please contact the administrator',
                        dismiss: true,
                    });
                    //console.log("done gone wrong")
                }
            })
    }, [setMessage]);

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
                setLoading(false);
            }).catch((error) => {
                //console.log(error);
                if (error.response.status === 500) {
                  setLoading(false);  
                }
                
            });
        

    }, [googleId]);

    //console.log(accountList)
    return (

        <Col xs={12} lg={6} className="profile-accounts rounded pt-0 pt-2 mt-4 mt-lg-0 border-top border-light shadow-sm">

            {ready ? 
            <Button variant="success" className="mb-2 ms-2" onClick={open}>
                    <i className="fa-solid fa-circle-plus me-2"></i>
                Add Account 
                </Button>
                : <Button variant="success" className="mb-2 ms-2" onClick={open} disabled>
                    <i className="fa-solid fa-circle-plus me-2"></i>
                    Add Account
                </Button>
            }
            
            {(loading) ? 

                    <LoaderSmall content={"Loading Accounts..."} />

                    :
                accountList.map((element) => {
                    return <ProfileAccountCard key={element.account_id} account={element} accountDeleteHandler={accountDeleteHandler} />
                })
            }
            

        </Col>
    )
}

export default ProfileAccounts;
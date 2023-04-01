import axios from "axios";
import { UserContext } from '../contexts/User';
import { useState, useEffect, useContext } from "react";
import { usePlaidLink } from 'react-plaid-link';


axios.defaults.baseURL = 'https://plaidpal-api.onrender.com';
//axios.defaults.withCredentials = true;
function PlaidAuth({ publicToken }) {
    const [account, setAccount] = useState();
    const { user } = useContext(UserContext); 
    
    useEffect(() => {
        async function fetchData() {
            let accessToken = await axios.post('/api/exchange_public_token', {
                token: publicToken,
                googleId: user.googleId,
            });
            console.log('accessToken: ', accessToken.data);
            const auth = await axios.post('/api/auth', {
                access_token: accessToken.data.accessToken,
            });
            setAccount(auth.data.numbers.bacs[0]);
            console.log('auth data: ', auth.data);
        }
        fetchData();
    }, [publicToken, user.googleId]);
    return (
        account && (
            <>
                <p>Account number: {account.account}</p>
                <p>Account sort code: {account.sort_code}</p>
            </>
        )
    );
}
const Dashboard = () => {
    const [linkToken, setLinkToken] = useState();
    const [publicToken, setPublicToken] = useState();
    //const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        async function fetch() {
            const response = await axios.post('/api/create_link_token', {});
            setLinkToken(response.data.link_token);
            console.log('response: ', response);
        }
        fetch();
    }, []);
    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            setPublicToken(public_token);
           
            console.log('success ', public_token, metadata);
            // send public_token to server
        },
    });
    return publicToken ? (
        <PlaidAuth publicToken={publicToken} />
    ) : (
        <button onClick={() => open()} disabled={!ready}>
            Connect a bank account
        </button>
    );
};

export default Dashboard;
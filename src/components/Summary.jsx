import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/User'; 

const Summary = () => {
    
    const { user } = useContext(UserContext); 
    
    const [list, setList] = useState([]);

    axios.defaults.baseURL = 'https://be-plaidpal.onrender.com';
    
    useEffect(() => {


            async function fetch() {
                const response = await axios.post('/api/plaid/accounts ', {googleId: user.googleId});
                console.log(response, "here");   
                setList(response.data);
            }
            fetch();


    }, [user.googleId])

    return (
        <>
            {list.map((element) => {
                return <p>{element.balances.available}</p>   
            })}
        </>
    )
}

export default Summary;
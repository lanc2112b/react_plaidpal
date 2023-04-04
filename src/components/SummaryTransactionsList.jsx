import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/User';
import { MessageContext } from '../contexts/Message';
import { getTransactionById, addPostById } from '../api/api';
import FlashMessage from './FlashMessage';
import { Table, Modal, Button, Form} from 'react-bootstrap';
import SummaryTransactionCard from './SummaryTransactionCard';
import LoaderSmall from './LoaderSmall'

const SummaryTransactionsList = ({ list }) => {
    
    const { user } = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);

    const [summaryModalShow, setSummaryModalShow] = useState(false);
    const [transactionKey, setTransactionKey] = useState('');
    const [transaction, setTransaction] = useState(null);
    const [note, setNote] = useState("");
    const [noteError, setNoteError] = useState(null);

    const handleClose = () => {
        setSummaryModalShow(false);
        setTransaction(null);
        setMessage({
            msgType: null,
            showMsg: null,
            title: null,
            msg: null,
            dismiss: null,
          });
    }


    useEffect(() => {
        getTransactionById({ googleId: user.googleId }, transactionKey)
            .then((results) => {
                console.log(results);
                setTransaction(results);
                setNote(results.note.note);
            })
            .catch((error) => {
                console.log(error);
                /* if (error.response.status === 500) {
                    window.location.replace('/500');
                } */
            });
    }, [user.googleId, transactionKey])


    const clickHandler = (clickValue) => {
        setTransactionKey(clickValue);
        setSummaryModalShow(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(noteError.length === 0){
            if(note.length >= 10 || note.length <= 200){
                addPostById(user.googleId, transactionKey, note)
                .then((results)=> {
                    if(results.status === 201){
                        setMessage({
                            msgType: "success",
                            showMsg: true,
                            title: "Added",
                            msg: "Your note has been added",
                            dismiss: true,
                          })
                    }
                })
            }
        }
}   

    const changeHandler = (event) => {
        const {value} = event.target;
        if(value.length < 10 || value.length > 200){
            setNoteError("Please enter a note between 10 and 200 characters");
        } else {
            setNoteError("");
        }
        setNote(value);
    }

    
    return (
        <>
            <div className='card'>
             <Table responsive striped hover className="shadow-sm" size="sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Merchant</th>
                        <th className="d-none d-md-table-cell">Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody >
                    {list.map((element) => {
                        return (<tr onClick={() => { clickHandler(element.transaction_id) }} key={element.transaction_id}><SummaryTransactionCard transaction={element}/></tr>)
                    })}
                </tbody>
                </Table>

                 <Modal show={summaryModalShow} onHide={handleClose} animation={false} size='lg' className="text-white">
                    <Modal.Header className="bg-dark text-light border-0">
                        <h5>Transaction Details</h5>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-light">
                        {!transaction ? <LoaderSmall content={'Loading transaction... '} />
                            :
                            <>
                                <dl>
                                    <dt>Date:</dt>
                                    <dd>{transaction.transaction[0].date}</dd>

                                    <dt>Name:</dt>
                                    <dd>{transaction.transaction[0].name}</dd>

                                    <dt>Account_id:</dt>
                                    <dd>{transaction.transaction[0].account_id} </dd>

                                    <dt>Amount:</dt>
                                    <dd>£{transaction.transaction[0].amount}</dd>

                                    <dt>Transaction Type:</dt>
                                    <dd>{transaction.transaction[0].transaction_type} </dd>

                                    <dt>Transaction Status:</dt>
                                    <dd>{transaction.transaction[0].pending ? "Pending" : "Settled"} </dd>
                                    
                                </dl>
                                <p>Don't recognise this transaction?</p>
                                <Button variant="danger" type="submit" size="sm" >Report</Button>
                            
                                <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Transaction Note:{" "}
                                        {/* <Form.Label> {" "} */}
                                        {noteError && <span className='error-text'>{noteError}</span>}
                                        </Form.Label>
                                        <Form.Control onChange={changeHandler} as="textarea" size="sm" value={note} placeholder="note or existing" className="bg-light bg-gradient">
                                    </Form.Control>
                                            <span className="small text-white">Current note length {note?.length}</span>
                                </Form.Group>

                                <Button variant="success" type="submit" size="sm" onClick={() => { }}>
                                    Save
                                </Button>
                                </Form>
                                <FlashMessage/>
                            </>
                        }
                    </Modal.Body>
                    <Modal.Footer className="bg-dark text-light border-0">
                        <Button variant="secondary" size="sm" onClick={handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer >
                </Modal>
            </div>
        </>
    )


 }

export default SummaryTransactionsList;

/**
 * {
        "account_id": "LZ1wReq5xAcrPpJovq1yf9EM6LKeE1SeyRGpP",
        "account_owner": null,
        "amount": 12,
        "authorized_date": "2022-02-01",
        "authorized_datetime": null,
        "category": [
            "Food and Drink",
            "Restaurants",
            "Fast Food"
        ],
        "category_id": "13005032",
        "check_number": null,
        "date": "2022-02-01",
        "datetime": null,
        "iso_currency_code": "GBP",
        "location": {
            "address": null,
            "city": null,
            "country": null,
            "lat": null,
            "lon": null,
            "postal_code": null,
            "region": null,
            "store_number": "3322"
        },
        "merchant_name": "McDonald's",
        "name": "McDonald's",
        "payment_channel": "in store",
        "payment_meta": {
            "by_order_of": null,
            "payee": null,
            "payer": null,
            "payment_method": null,
            "payment_processor": null,
            "ppd_id": null,
            "reason": null,
            "reference_number": null
        },
        "pending": false,
        "pending_transaction_id": null,
        "personal_finance_category": null,
        "transaction_code": null,
        "transaction_id": "E4PWzdk5lLCWzwlrpnPbsVjng9v4JrCgG5p5d",
        "transaction_type": "place",
        "unofficial_currency_code": null
    }
 */
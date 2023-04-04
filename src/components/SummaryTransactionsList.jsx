import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/User';
import { getTransactionById, addPostById } from '../api/api';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import SummaryTransactionCard from './SummaryTransactionCard';
import SummaryModalMessage from './SummaryModalMessage';
import LoaderSmall from './LoaderSmall'

const SummaryTransactionsList = ({ list }) => {

    const { user } = useContext(UserContext);

    const [summaryModalShow, setSummaryModalShow] = useState(false);
    const [transactionKey, setTransactionKey] = useState('');
    const [transaction, setTransaction] = useState(null);
    const [note, setNote] = useState("");
    const [noteError, setNoteError] = useState(null);
    const [formSubmitMSG, setFormSubmitMSG] = useState(null);

    const handleClose = () => {
        setSummaryModalShow(false);
        setTransaction(null);
        setFormSubmitMSG(null);
    }


    useEffect(() => {
        getTransactionById({ googleId: user.googleId }, transactionKey)
            .then((results) => {
                setTransaction(results);
                setNote(results.note.note);
                setFormSubmitMSG('');
            })
            .catch((error) => {
                //console.log(error);
                if (error.response.status === 500) {
                    window.location.replace('/500');
                }
            });
    }, [user.googleId, transactionKey])


    const clickHandler = (clickValue) => {
        setTransactionKey(clickValue);
        setSummaryModalShow(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (noteError?.length === 0) {
            if (note?.length >= 10 || note?.length <= 200) {
                addPostById(user.googleId, transactionKey, note)
                    .then((results) => {
                        console.log(results.status)
                        if (results.status === 201) {
                            setFormSubmitMSG({stat: 'success', msg: 'Note updated / added'});
                        }

                    })
                    .catch((error) => {
                        setFormSubmitMSG({ stat: 'danger', msg: 'Something went wrong!' });
                    })
            }
        }
    }

    const changeHandler = (event) => {
        const { value } = event.target;
        if (value.length < 10 || value.length > 200) {
            setNoteError("Please enter a note between 10 and 200 characters");
        } else {
            setNoteError("");
        }
        setNote(value);
    }


    return (
        <>
            <div className='card'>
                <Table responsive striped hover className="shadow-sm " size="sm">
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
                            return (<tr onClick={() => { clickHandler(element.transaction_id) }} key={element.transaction_id}><SummaryTransactionCard transaction={element} /></tr>)
                        })}
                    </tbody>
                </Table>

                <Modal show={summaryModalShow} onHide={handleClose} animation={true} size='lg' className="text-white pb-4">
                    <Modal.Header className="bg-dark text-light border-0 pb-1 px-5 pt-4">
                        <h5>Transaction Details</h5>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-light px-5 pt-2 pb-1">
                        {!transaction ? <LoaderSmall content={'Loading transaction... '} />
                            :
                            <>
                                <hr />
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
                                <hr />
                                <p>Don't recognise this transaction?</p>
                                <Button variant="danger" type="submit" size="sm" >Report</Button>
                                <hr />
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

                                    <Button variant="success" type="submit" size="sm" className="me-4" onClick={() => { }}>
                                        Save{' '}
                                    </Button>
                                    <SummaryModalMessage formSubmitMSG={formSubmitMSG} setFormSubmitMSG={setFormSubmitMSG} />
                                    <hr />
                                </Form>
                            </>
                        }
                    </Modal.Body>
                    <Modal.Footer className="bg-dark text-light border-0 px-5 pt-1">
                        <Button variant="secondary" size="sm" className="mb-2" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer >
                </Modal>
            </div>
        </>
    )


}

export default SummaryTransactionsList;

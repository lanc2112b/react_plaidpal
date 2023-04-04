import { Modal, Button } from "react-bootstrap"

const DeleteAccountModal = ({ show, handleClose, deleteAccount }) => {


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-danger "><i className="fa-solid fa-hand me-2"></i>Stop!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete your account? <br />
                This action is irreversible, and will unlink all of your accounts from our application.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={deleteAccount}>
                    <i className="fa-solid fa-person-circle-minus me-2"></i>
                    Yes, Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )


}

export default DeleteAccountModal;
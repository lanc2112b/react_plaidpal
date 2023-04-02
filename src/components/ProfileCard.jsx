import { deleteUserById } from "../api/api";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Col, Button } from "react-bootstrap";
import DeleteAccountModal from "./DeleteAccountModal";


const ProfileCard = () => {

    const { user, setUser } = useContext(UserContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteAccount = () => {
        //console.log('deleted')
        handleClose();
        deleteUserById(user.googleId)
            .then((result) => {
                if (result === 204) {
                    localStorage.removeItem("user");
                    console.log('removed')
                    setUser({
                        user: {
                            firstName: null,
                            lastName: null,
                            picture: null,
                            email: null,
                            token: null,
                        },
                    });
                    
                    window.location.reload();
                }
                //console.log(result);
            })

    }

    return (
        <>
            <Col xs={12} lg={6} className="profile-card">
                <div className="card border-0 shadow-sm rounded border-top border-light">
                    <div className="card-header bg-white border-0">
                        <div className="card-photo shadow-sm">
                            <img src={user.picture} alt="" className="shadow-sm" />
                        </div>
                        <dl className="mt-5 ps-3">
                            <dt>Name</dt>
                            <dd>{user.firstName} {user.lastName}</dd>
                            <dt>Email</dt>
                            <dd>{user.email}</dd>
                        </dl>
                    </div>
                    <div className="card-footer border-0 bg-white shadow-sm d-flex flex-row justify-content-end">
                        <Button variant="danger" onClick={handleShow}>
                            <i className="fa-solid fa-user-slash me-2"></i>
                            Delete User
                        </Button>
                    </div>
                </div>
            </Col>

            <DeleteAccountModal show={show} handleClose={handleClose} deleteAccount={deleteAccount} />
        </>
    )
}

export default ProfileCard;

import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Col, Button} from "react-bootstrap";


const ProfileCard = () => {

    const { user } = useContext(UserContext);

    return (
        <Col xs={12} lg={6} className="profile-card">
            <div className="card border-0 shadow-sm rounded border-top border-light">
                <div className="card-header bg-white border-0">
                    <div className="card-photo shadow-sm">
                        <img src={user.picture} alt="" className="shadow-sm"/>
                    </div>
                    <dl className="mt-5 ps-3">
                        <dt>Name</dt>
                        <dd>{user.firstName} {user.lastName}</dd>
                        <dt>Email</dt>
                        <dd>{user.email}</dd>
                    </dl>
                </div>
                <div className="card-footer border-0 bg-white shadow-sm d-flex flex-row justify-content-end">
                    <Button variant="danger" onClick={() => console.log("Danger")}>
                        <i className="fa-solid fa-user-slash me-2"></i>
                        Delete Account
                    </Button>
                </div>
            </div>
        </Col>
    )
}

export default ProfileCard;
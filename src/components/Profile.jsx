import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import ProfileCard from "./ProfileCard";
import ProfileAccounts from "./ProfileAccounts"
import { Row } from "react-bootstrap";

const Profile = () => {
    const { user } = useContext(UserContext); 

    return (
        <section className="profile container">
            <Row className="gx-0 gx-md-4 mt-5">
                <ProfileCard />
                <ProfileAccounts googleId={user.googleId} />
            </Row>
        </section>
    )
 }

export default Profile;
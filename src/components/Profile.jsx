import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { Navigate } from 'react-router-dom';
import ProfileCard from "./ProfileCard";
import ProfileAccounts from "./ProfileAccounts"
import { Row } from "react-bootstrap";

const Profile = () => {
    const { user } = useContext(UserContext); 

    if (!user.email || !user.firstName) {

        return (<Navigate to="/" replace={true} />)

    }


    return (
        <section className="profile container">
            <Row className="gx-0 gx-md-4 mt-5">
                <ProfileCard />
                <ProfileAccounts token={user.token} />
            </Row>
        </section>
    )
 }

export default Profile;
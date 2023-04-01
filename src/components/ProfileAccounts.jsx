import { Button } from "react-bootstrap";

const ProfileAccounts = () => {
    /** Accounts list here */
    return (
        <section className="profile-accounts">
            {/** Add new account here */}
            <Button variant="success" className="">
                <i class="fa-solid fa-circle-plus me-2"></i>
                Add Account
            </Button>
            {/** each account card here  + deauth button */}

        </section>
    )
}

export default ProfileAccounts;
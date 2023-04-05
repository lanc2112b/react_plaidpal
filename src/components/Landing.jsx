import { Link } from "react-router-dom";

const Landing = () => {

    return (<section className="home">
        <img src="/chase_bank_1x.png" alt="" className="landing-image mb-3" />
        <p>
            Welcome to PlaidPal, the ultimate financial management tool designed to help you manage your finances and reach your financial goals.
            <br />With PlaidPal, you can easily connect all of your bank accounts and credit cards in one place, and get a comprehensive view of your
            financial transactions and balances. <strong><Link to="/signup">Sign up for PlaidPal today and take control of your financial life!</Link></strong></p>
    </section>)

}

export default Landing;
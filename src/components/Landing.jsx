import { Button } from "react-bootstrap";

const Landing = () => {

    return (<section className="home">
        <img src="/chase_bank_1x.png" alt="" className="landing-image mb-3" />
        <div className="px-3"> 
        <p className="text-center">
            Welcome to PlaidPal, the ultimate financial management tool designed to help you manage your finances and reach your financial goals.
            <br />With PlaidPal, you can easily connect all of your bank accounts and credit cards in one place, and get a comprehensive view of your
            financial transactions and balances. <br /><br />
            <strong>Sign up for PlaidPal today and take control of your financial life!</strong>
            </p>
        </div> 
        <div className=" d-flex flex-row justify-content-center ">
            
            <Button className="text-white w-25 my-3" variant="primary" onClick={() => console.log("Danger")}>
                Get Started
                <i className="fa-solid fa-circle-arrow-right ms-3"></i>
            </Button>
        </div>
    </section>)

}

export default Landing;
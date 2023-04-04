export default function TotalSpend(){

    return (
        <>
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Total Monthly Spend</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$15<small
                        className="text-body-secondary fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                </div>
            </div>
        </>
    )
}
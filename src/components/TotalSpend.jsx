export default function TotalSpend(){

    return (
        <>
            <div className="card mb-4 rounded-3 shadow-sm h-100">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Total Monthly Spend</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">This Months spending $420<small
                        className="text-body-secondary fw-light">/mo</small></h1>
                    <h2 className="card-title pricing-card-title">last months spending $69<small
                        className="text-body-secondary fw-light">/mo</small></h2>
                </div>
            </div>
        </>
    )
}
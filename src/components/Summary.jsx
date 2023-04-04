import SummaryTransactionsList from "./SummaryTransactionsList";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getTransactions } from "../api/api";
import LoaderSmall from "./LoaderSmall";
import Donut from "./Donut";
import { Bar } from "react-chartjs-2";
import Barchart from "./Barchart";
import SummaryFilter from "./SummaryFilter";

const Summary = () => {
  const { user } = useContext(UserContext);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTransactions(user.googleId)
      .then((results) => {
        setList(results);
      })
      .catch((error) => {});
    setLoading(false);
  }, [user.googleId]);

  if (loading) return <LoaderSmall content={"Loading transactions..."} />;

  console.log(list, "summary 27");
  return (
    <>
      {/** component for visualisation here */}
      <Donut list={list} />
      <Barchart list={list} />
      <SummaryFilter setList={setList} />
      {/** component for transaction list here */}
      <SummaryTransactionsList list={list} />
    </>
  );
};

export default Summary;

{
  /* <div className=“row row-cols-1 row-cols-md-3 mb-3 text-center”>
    <div className=“col”>
        <div className=“card mb-4 rounded-3 shadow-sm”>
            <Donut list={list} />
            </div>
        </div>
    </div>
    <div className=“col”>
        <div className=“card mb-4 rounded-3 shadow-sm”>
            <div className=“card-header py-3">
                <h4 className=“my-0 fw-normal”>MONLTHY SPEND</h4>
            </div>
            <div className=“card-body”>
                <h1 className=“card-title pricing-card-title”>$15<small
                        className=“text-body-secondary fw-light”>/mo</small></h1>
                <ul className=“list-unstyled mt-3 mb-4”>
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                </ul>
                <button type=“button” className=“w-100 btn btn-lg btn-primary”>Get started</button>
            </div>
        </div>
    </div>
    <div className=“col”>
        <div className=“card mb-4 rounded-3 shadow-sm border-primary”>
            <Barchart list={list} />
        </div>
    </div>
</div> */
}

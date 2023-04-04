import SummaryTransactionsList from "./SummaryTransactionsList";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getTransactions } from "../api/api";
import LoaderSmall from "./LoaderSmall";
import Donut from "./Donut";
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

      <SummaryFilter setList={setList} />
      {/** component for transaction list here */}
      <SummaryTransactionsList list={list} />
    </>
  );
};

export default Summary;

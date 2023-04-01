import axios from "axios";

const ppApi = axios.create({
  baseURL: "https://be-plaidpal.onrender.com/api/",
});

export const getAccounts = (token) => {
  return ppApi.post(`/plaid/accounts`, { googleId: '108971830262728991643' }) /// replace with token, needs to be sent from backend. inboth signup & login (we only have JWT being sent, we want the short one from the DBnpm start)
    .then((results) => {
      //console.log(results)
      return results.data;
    });

}
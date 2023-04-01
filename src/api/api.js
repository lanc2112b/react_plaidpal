import axios from "axios";

const ppApi = axios.create({
  baseURL: "https://be-plaidpal.onrender.com/api/",
});

export const getAccounts = (token) => {
  return ppApi.post(`/plaid/accounts`, { googleId: '108971830262728991643' })
    .then((results) => {
      //console.log(results)
      return results.data;
    });

}
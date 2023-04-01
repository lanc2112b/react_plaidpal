import axios from "axios";

const ppApi = axios.create({
  baseURL: "https://be-plaidpal.onrender.com/api/",
});

//const tempToken = '108971830262728991643'

///  app.post("/api/plaid/accounts", getPlaidAccounts);  // used in profile :)
// Any filters on this endpoint? 
export const getAccounts = (googleId) => {
  return ppApi
    .post(`/plaid/accounts`, { googleId: googleId }) 
    .then((results) => {
      //console.log(results)
      return results.data;
    });

}

//app.get("/api/users", getAllUsers); // do we need a get? Maybe for an admin panel?
// This may want securing with a googleId in the headers
export const getAllUsers = (googleId = null) => {
  return ppApi
    .get(`/users`) 
    .then((results) => {
      //console.log(results)
      return results.data;
    });

}

// app.get("/api/users/:googleId", getUserById); // do we need a get? Maybe for an admin panel?
export const getUserById = (googleId) => {
  return ppApi.get(`/users/${googleId}`) 
    .then((results) => {
      //console.log(results)
      return results.data;
    });

}
// I think the two above have sort of been deprecated by the way we sso now. but need protecting

// app.delete("/api/users/:googleId", deleteUserById); /// For the delete user button in profile : 

/** THIS defintely needs protecting :)  */
export const deleteUserById = (googleId) => {
  return ppApi
    .delete(`/users/${googleId}`)
    .then((results) => {
      //console.log(results)
      // return the status code here
      return results.status;
    });

}

/// NOTE: "/api/login",  <<< rewrite in here and replace usage in login page

// app.post("/api/signup" << < rewrite in here and replace usage in login page
// app.post("/api/users", createUser);  // /api/signup deperecates this, identical. . 
export const addNewUser = (data) => { // data object, 
  return ppApi
    .post('/signup')
    .then((results) => {
      //console.log(results)
      return results.data; // returned user object
    });

}

// replacement for dashboard code
// app.post("/api/create_link_token", createLinkToken);   // user <-> plaid setup
export const createLinkToken = (data) => { // data object, 
  return ppApi
    .post('/create_link_token', {})
    .then((results) => {
      //console.log(results)
      return results.data; // returned token object 
    });

}

// app.post("/api/exchange_public_token", tokenExchange); // user <-> plaid setup
export const tokenExchange = (data) => { // data object, 
  return ppApi
    .post('/exchange_public_token', { data })
    .then((results) => {
      //console.log(results)
      return results.data; // returned token object 
    });

}

export const authUser = (data) => { // data object, 
  return ppApi
    .post('/auth', {data})
    .then((results) => {
      console.log(results)
      return results.data; // returned token object 
    });

}


// app.post("/api/plaid/transactions", getTransactions); /// for summary / dashboard page  
//[daterange, income, expediture, asc/ desc, page, limit] or whatever the actual ones are... 
export const getTransactions = (data, filters) => { // data object, 
  return ppApi
    .post('/plaid/transactions',
      //{params: {   // change out the params for those needed
         // limit: limit,
          //selectType: 'income',  
        //}}
        )
    .then((results) => {
      //console.log(results)
      return results.data; // returned token object 
    });
}

// app.post("/api/notes/:transaction_id", postNoteByTransactionId); // mix in with transactions :)
//loop through one and attach a new 'key' to object where transaction matches -> util function. 

// if this end point only delivers a single note, that'll be a ton of calls... :o
// can this deliver many notes identified by account and transaction ( thinking the accounts list could have a popover or badge with a note count. )? Example below.
export const getTransactionNotes = (data) => { // data object, 
  return ppApi
    .post('/exchange_public_token')
    .then((results) => {
      //console.log(results)
      return results.data; // returned token object 
    });
}

/**
 * {notes: [{account_id: 'xyz',
 *           transaction_id: 'xyz,
 *           note: 'some message here},
 *          {account_id: 'abc',
 *           transaction_id: 'def,
 *           note: 'another message here},
 *          {account_id: 'abc',
 *           transaction_id: 'def,
 *           note: 'another message here},  
 *          ]}
 *  }
 */
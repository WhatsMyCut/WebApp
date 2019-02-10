import { Auth } from "aws-amplify";
import { localhost as host } from "../../config";
import API from "@aws-amplify/api";

async function refreshAccountTransactions() {
  var session = await Auth.currentSession();
  return fetch(`${host}/transactions/refresh`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.accessToken.jwtToken}`
    },
    body: JSON.stringify({})
  });
}

async function getTransactionsByDateRange({ start, end }) {
  var session = await Auth.currentSession();

  var res = await fetch(`${host}/transactions/start/${start}/end/${end}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.accessToken.jwtToken}`
    }
  });
  return res.json();
}
export { refreshAccountTransactions, getTransactionsByDateRange };

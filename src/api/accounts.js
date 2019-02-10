import { Auth } from "aws-amplify";
import { localhost as host } from "../../config";
import API from "@aws-amplify/api";

async function getAccounts() {
  var session = await Auth.currentSession();
  console.log(session.accessToken.jwtToken);
  var res = await fetch(`${host}/accounts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.accessToken.jwtToken}`
    }
  });

  return await res.json();
}

export { getAccounts };

import { Auth } from "aws-amplify";
import { localhost as host } from "../../config";
import API from "@aws-amplify/api";

async function createOrUpdateDevice(device) {
  var session = await Auth.currentSession();
  return fetch(`${host}/userdevices`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.accessToken.jwtToken}`
    },
    body: JSON.stringify(device)
  });
}

async function getUsersDevices({ start, end }) {
  var session = await Auth.currentSession();

  var res = await fetch(`${host}/userdevices`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.accessToken.jwtToken}`
    }
  });
  return res.json();
}
export { getUsersDevices, createOrUpdateDevice };

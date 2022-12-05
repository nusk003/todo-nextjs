import type { NextApiRequest, NextApiResponse } from "next";
import firebase from "./utils";

const firebaseAdminApp = firebase.firebaseAdminApp();
const auth = firebaseAdminApp.auth();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const users = await auth.listUsers();
    res.send(users.users);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send("Server error");
  }
}

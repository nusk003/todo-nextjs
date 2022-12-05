// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import type { NextApiRequest, NextApiResponse } from "next";
import firebase from "./utils";

const firebaseAdminApp = firebase.firebaseAdminApp();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const auth = firebaseAdminApp.auth();
  const cookie = new Cookies(req, res);
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await auth.createUser({ email, password });
    const customClaims = { admin: false, staff: true };
    await auth.setCustomUserClaims(user.uid, customClaims);
    const customToken = await auth.createCustomToken(user.uid, customClaims);
    cookie.set("uid", user.uid);
    res.send(customToken);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send("Server error");
  }
}

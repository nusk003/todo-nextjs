import { __firebase_api_key__ } from "../constants";
import admin from "firebase-admin";

interface Firebase {
  firebaseAdminApp: () => admin.app.App;
}

let firebase: Firebase | undefined;

if (!firebase) {
  firebase = {
    firebaseAdminApp: () => admin.initializeApp(undefined, "todo-app"),
  };
}

export default firebase as Firebase;

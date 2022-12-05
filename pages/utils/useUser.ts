import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebaseApp from "./firebase";

const auth = getAuth(firebaseApp);

export default function useUser() {
  const [user, setUser] = useState<User | null>(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return user;
}

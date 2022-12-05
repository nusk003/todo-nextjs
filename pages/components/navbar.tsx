import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import firebaseApp from "../utils/firebase";
import useUser from "../utils/useUser";

const auth = getAuth(firebaseApp);

export default function Navbar() {
  const router = useRouter();

  const user = useUser();

  const handleLogin = useCallback(async () => {
    if (user !== null) {
      await signOut(auth);
    } else {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="row space-between">
      <h2>Users</h2>
      <div className="row">
        <button
          style={{ marginRight: 8 }}
          onClick={() => router.push("/add-task")}
        >
          Add task
        </button>
        <button style={{ marginRight: 8 }} onClick={handleLogin}>
          {user !== null ? "Logout" : "Login"}
        </button>
        <button
          style={{ marginRight: 8 }}
          onClick={() => router.push("/register-staff")}
        >
          Add staff
        </button>
        <button onClick={() => router.push("/register-admin")}>
          Add admin
        </button>
      </div>
    </div>
  );
}

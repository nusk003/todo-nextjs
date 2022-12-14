import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import firebaseApp from "./utils/firebase";
import { signInWithCustomToken, getAuth } from "firebase/auth";
import Navbar from "./components/navbar";

const auth = getAuth(firebaseApp);

export default function RegisterAdmin() {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const response = await axios.post("/api/register-admin", {
      email,
      password,
    });

    await signInWithCustomToken(auth, response.data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Register Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <h3>Register Admin</h3>
        <form onSubmit={onSubmit} className="column">
          <input name="email" placeholder="Email" type="email" />
          <input name="password" placeholder="Password" type="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

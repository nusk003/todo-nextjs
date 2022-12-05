import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import firebaseApp from "./utils/firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Navbar from "./components/navbar";

const db = getFirestore(firebaseApp);

export default function AddTask() {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;

    await addDoc(collection(db, "task"), { title, description });

    alert("Successfully created");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Add task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <h3>Add task</h3>
        <form onSubmit={onSubmit} className="column">
          <input name="title" placeholder="Title" type="text" />
          <input name="description" placeholder="Description" type="text" />
          <button type="submit">Add task</button>
        </form>
      </div>
    </div>
  );
}

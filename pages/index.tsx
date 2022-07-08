import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Fan from "./fan";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Fan />
    </div>
  );
};

export default Home;

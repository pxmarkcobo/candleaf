import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/pages/ThankYouPage.module.scss";

const ThankYouPage = () => {
  return (
    <div className={styles["main"]}>
      <Head>
        <title>Fin</title>
        <link rel="icon" href="/icons/icon.svg" />
      </Head>
      <h1>fin</h1>
      <Link href="/">
        <a className={styles["gradient-link"]}>take me home</a>
      </Link>
    </div>
  );
};

export default ThankYouPage;

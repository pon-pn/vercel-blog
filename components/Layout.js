// 共通パーツ headerのコンポーネント
import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "HORI";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.headCont}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${styles.headIcon} ${styles.headerHomeImage}`}
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/profile.png" className={`${styles.headIcon}`} />
            <h1 className={styles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;

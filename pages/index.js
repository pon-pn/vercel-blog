import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/post";

// SSGの場合のコーディング（1回だけプリレンダリング）
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData, //これをHomeに渡す
    },
  };
}

// propsを受け取る
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyle.headingMd}>
          へにゃちょこエンジニアです。日々のインプットを備忘録としてメモ。
        </p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>

        <div className={`${styles.grid}`}>
          {/* 記事をデータの取得分だけ更新していく */}
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            // key={id}を指定することで一意の記事にしていく
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  className={`${styles.thumbnailImage}`}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

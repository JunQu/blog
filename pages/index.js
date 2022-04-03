import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { getMDPosts } from '../lib/posts';
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import { Image } from '../components/Image'

export default function Home({ postsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/blog/favicon.ico" />
        <meta name="description" content="JunQu Blog is a blog that helps do/achieve." />
        <meta name="og:title" content="Blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>JunQu Blog</title>
      </Head>
      <header className={styles.header}>
        <Image
          src="/blog/images/135645420.jpg"
          height={144}
          width={144}
          className={utilStyles.borderCircle}
          alt="avatar"
        />
      </header>
      <main>
        <h1>Posts List</h1>
        <ul className={utilStyles.list}>
          {postsData.map((post) => (
            <li key={post.id} className={utilStyles.listItem}>
              <Link href={`/${post.urlPath}`}>
                <a>{post.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <time dateTime={post.updatedAt}>{new Date(post.updatedAt).toDateString()}</time>
              </small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const postsData = await getMDPosts();
  return {
    props: {
      postsData,
    },
  };
}

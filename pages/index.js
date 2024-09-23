import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>


        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main >

  );
}

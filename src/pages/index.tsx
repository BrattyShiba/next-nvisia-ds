import Head from "next/head";
import Image from "next/image";
import { Maven_Pro } from '@next/font/google';

import styles from "../styles/Home.module.css";

const mavenPro = Maven_Pro({ subsets: ['latin']});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NV Design System</title>
        <meta name="description" content="Nvisia design system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>This is the Header 1</h1>
        <h2>This is the Header 2</h2>
        <h3>This is the Header 3</h3>
        <span className="accent">This is an accent</span>
        <a href="#">This is a Link</a>
        <figure>
          <blockquote>This is a block quote</blockquote>
        </figure>
        <div className={mavenPro.className}>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          doloribus et fuga. Voluptates nobis porro assumenda, magnam
          accusantium doloremque recusandae aperiam, perspiciatis aut at amet
          veritatis cum numquam dolor ea?
        </p>
        </div>
      </main>
    </div>
  );
}

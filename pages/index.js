import Head from "next/head";
import { name, siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "../components/layout.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio </title>
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.jpg"
          className={`${utilStyles.headerHomeImage} ${utilStyles.borderCircle}`}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>

        <title>{siteTitle}</title>
        <p> </p>
      </header>

      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Natalia. I'm a Junior Software Developer.</p>
        <p>My tech stack</p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Python</li>
          <li>AWS and Azure</li>
          <li>SQL, MongoDB </li>
          <li>Styled components, CSS modules </li>
        </ul>
        <p>
          Find out more about my work over{" "}
          <Link href="/posts/projects">
            <a>here</a>
          </Link>
        </p>
      </section>
      <Footer />
    </div>
  );
}

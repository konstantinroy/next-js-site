import Head from 'next/head'
import Link from "next/link";
import styles from './MainContainer.module.scss'

function MainContainer({ children }) {
  return (
    <>
      <Head>
        <meta keywords="Konstantin Roy"></meta>
        <title>Главная страница</title>
      </Head>
      <div className={styles.navbar}>
        <Link href="/" className={styles.link}>
          Главная
        </Link>
        <Link href="/users" className={styles.link}>
          Пользователи
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
}

export default MainContainer;

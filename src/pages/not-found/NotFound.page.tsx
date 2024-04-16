import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import styles from './notfound.module.css';

const NotFoundPage = () => (
  <main>
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className="text text_type_digits-large"> 404 </h1>
        <p className="text text_type_main-large">Lost in space</p>
      </div>
      <Link to="/">
        <Button variant="light" radius="xl">
          Take me home
        </Button>
      </Link>
    </section>
  </main>
);

export default NotFoundPage;

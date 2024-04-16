import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import styles from './notfound.module.css';

const NotFoundPage = () => (
  <main className={styles.layout}>
    <h2 className={styles.text}> 404 </h2>
    <p className={styles.text}>Вы потерялись</p>

    <Link to="/">
      <Button variant="light" radius="xl">
        Take me home
      </Button>
    </Link>
  </main>
);

export default NotFoundPage;

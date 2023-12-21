import styles from './page.module.css';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>alex</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}

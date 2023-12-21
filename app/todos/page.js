import styles from '../page.module.css';
import { currentUser } from '@clerk/nextjs';

async function getData() {
  const res = await fetch('http://localhost:4000/api/todos');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
const user = await currentUser();

export default async function Todos() {
  const data = await getData();

  return (
    <div>
      <p>
        Hello {user.firstName} your user id is {user.id}
      </p>
      {console.log(user)}

      <main className={styles.main}>
        <h1>todos page</h1>
        {data.map((todo) => (
          <p>{todo.todoName}</p>
        ))}
      </main>
    </div>
  );
}

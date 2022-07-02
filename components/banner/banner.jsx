import Image from 'next/image';
import styles from './Banner.module.css'

const message = "Feel free to start earning money online!";
const description = "Looking forward to work online? Missions is the perfect platform for that. We provide you a wide range of missions that you can take on at any time and get paid for completing them!";

export default function Banner() {
  return(
    <section className={styles.banner}>

      <section className={styles.content}>
        <h1 className={styles.message}>{message}</h1>
        <p className={styles.description}>{description}</p>
      </section>

      <div className={styles.users_container}>
        <img src="/users.png" alt="users" className={styles.users_img} />
      </div>
    </section>
  );
}

import Link from 'next/link';
import styles from './comments.module.css'
import Image from 'next/image';

const Comments = () => {
  const status = "autenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Comments
      </h1>
      {status === "autenticated" ? (
        <div className={styles.write}>
          <textarea placeholder='write a comment...' className={styles.input}></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
            dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam t
            otam libero ipsa aliquam obcaecati, in facere molestiae architecto
            asperiores?…
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
            dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam t
            otam libero ipsa aliquam obcaecati, in facere molestiae architecto
            asperiores?…
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
            dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam t
            otam libero ipsa aliquam obcaecati, in facere molestiae architecto
            asperiores?…
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
            dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam t
            otam libero ipsa aliquam obcaecati, in facere molestiae architecto
            asperiores?…
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments
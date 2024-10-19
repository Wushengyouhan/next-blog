import Image from "next/image"
import styles from "./singlePage.module.css"
import Menu from "@/components/Menu/Menu"
import Comments from "@/components/comments/Comments"

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar}></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.userTextContainer}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
              dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam t
              otam libero ipsa aliquam obcaecati, in facere molestiae architecto
              asperiores?…
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
              dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam t
              otam libero ipsa aliquam obcaecati, in facere molestiae architecto
              asperiores?…
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
              dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam t
              otam libero ipsa aliquam obcaecati, in facere molestiae architecto
              asperiores?…
            </p>
          </div>
          <div className={styles.comment}>
            <Comments></Comments>
          </div>
        </div>
        <Menu></Menu>
      </div>

    </div>

  )
}

export default singlePage
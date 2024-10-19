import Image from "next/image"
import styles from "./singlePage.module.css"
import Menu from "@/components/Menu/Menu"

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
        <div className={styles.post}></div>
        <Menu></Menu>
      </div>
      
    </div>

  )
}

export default singlePage
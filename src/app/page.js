import styles from "./page.module.css";
import Image from "next/image";
import staticImage from "../../public/image.jpg"

const Home = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.staticImage}>
        <p className={styles.heading}>Static Image(img)</p>
        <img src={staticImage.src} alt="image" />
      </div>
    </main>
  )
}

export default Home
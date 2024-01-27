import styles from "./page.module.css";
import Image from "next/image";
import ImageSrc from "../../public/image.jpg"

const Home = () => {
  return (
    <main className={styles.wrapper}>
      {/* Static image using the normal <img> tag */}
      <div className={styles.staticImage}>
        <p className={styles.heading}>Static Image(img)</p>
        <div className={styles.imageDiv}>
          {/* <img src={ImageSrc.src} alt="image" /> */}
        </div>
      </div>
      {/* Dynamic image using the next <Image> tag */}
      <div className={styles.staticImage}>
        <p className={styles.heading}>Static Image(img)</p>
        <div className={styles.imageDiv}>
          <Image 
          src={ImageSrc}
          alt="image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          />
        </div>
      </div>
    </main>
  )
}

export default Home
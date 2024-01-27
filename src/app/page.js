import styles from "./page.module.css";
import Image from "next/image";
import ImageSrc from "../../public/image.jpg"

const Home = () => {
  const imageURL = "https://images.unsplash.com/photo-1604500693431-647f9e76dafc?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <main className={styles.wrapper}>
      {/* Static image using the normal <img> tag */}
      <div className={styles.staticImage}>
        <p className={styles.heading}>Static Image(img)</p>
        <div className={styles.imageDiv}>
          <img src={ImageSrc.src} alt="image" />
        </div>
      </div>
      {/* Static image using the next <Image> tag */}
      <div className={styles.staticImage}>
        <p className={styles.heading}>Static Image(next/Image)</p>
        <div className={styles.imageDiv}>
          <Image 
          src={ImageSrc}
          alt="image"
          fill
          placeholder="blur"
          sizes="25vw"
          />
        </div>
      </div>
    </main>
  )
}

export default Home
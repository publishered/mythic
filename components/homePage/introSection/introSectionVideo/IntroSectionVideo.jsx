import styles from './IntroSectionVideo.module.css'

const IntroSectionVideo = () => {
   return <>
      <video width="100%" height="100%" className={styles.video} autoPlay muted loop playsInline>
         <source src="video/intro2.webm" type="video/webp" />
         <source src="video/intro2.mp4" type="video/mp4" />
         Your browser does not support the video tag.
      </video>
   </>
}

export default IntroSectionVideo
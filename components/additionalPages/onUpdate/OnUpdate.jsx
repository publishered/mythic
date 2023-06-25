import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import styles from './OnUpdate.module.css'

const OnUpdate = () => {
   return <section className={styles.error}>
      <div className={styles.error__images}>
         <Image src="/images/info-page-bg.svg" width="3036" height="600" alt='' className={styles.error__background} />
         <Image src="/images/site-update.svg" width="150" height="112" alt=''className={styles.error__img} />
      </div>
      <Container>
         <div className={styles.error__info}>
            <h1 className={styles.error__title}>We're working on it!</h1>
            <p className={styles.error__text}>
               This site is being updated.
               <br/>
               Please check back soon.
            </p>
            <a href="/" className={styles.error__link}>
               Domain: mythicesports.com
            </a>
         </div>
      </Container>
   </section>
}

export default OnUpdate
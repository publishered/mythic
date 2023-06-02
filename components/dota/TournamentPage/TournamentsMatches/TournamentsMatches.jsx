import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import styles from './TournamentsMatches.module.css'

const TournamentsMatches = () => {
   return <section className={styles.matches}>
      <Container>
         <h2 className={styles.matches__title}>Matches (First bracket)</h2>
         <div className={styles['matches__inner']}>
            <TournamentsMatchesItem />
            <TournamentsMatchesItem />
            <TournamentsMatchesItem />
            <TournamentsMatchesItem />
            <TournamentsMatchesItem />
            <TournamentsMatchesItem />
         </div>
      </Container>
   </section>
}

const TournamentsMatchesItem = () => {
   return <div className={styles.item}>
      <div className={styles.item__left}>
         <h3 className={styles.item__name}>Hidden <span>information</span></h3>
         <Image 
            src="/images/icon/hidden-img.svg"
            className={styles.item__img}
            width="50"
            height="50"
            alt=''
         />
      </div>
      <span className={styles.item__score}>0 : 0</span>
      <div className={styles.item__right}>
         <Image 
            src="/images/icon/hidden-img.svg"
            className={styles.item__img}
            width="50"
            height="50"
            alt=''
         />
         <h3 className={styles.item__name}>Hidden <span>information</span></h3>
      </div>
   </div>
}

export default TournamentsMatches
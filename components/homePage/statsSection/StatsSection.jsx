import Container from '@/components/UI/container/Container'
import styles from './StatsSection.module.css'

const StatsSection = () => {
   return <section className={styles.stats}>
      <Container>
         <div className={styles.stats__inner}>
            <div className={styles.stats__item}>
               <span className={styles['stats__item-label']}>5k+</span>
               <p className={styles['stats__item-text']}>Matches in total were played</p>
            </div>
            <div className={styles.stats__item}>
               <span className={styles['stats__item-label']}>32k+</span>
               <p className={styles['stats__item-text']}>Total players registered</p>
            </div>
            <div className={styles.stats__item}>
               <span className={styles['stats__item-label']}>$2.5k+</span>
               <p className={styles['stats__item-text']}>Was paid players in total</p>
            </div>
         </div>
      </Container>
   </section>
}

export default StatsSection
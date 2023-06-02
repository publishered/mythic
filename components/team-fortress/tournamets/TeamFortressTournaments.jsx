import Image from 'next/image'
import Link from 'next/link'
import styles from './TeamFortressTournaments.module.css'

const TeamFortressTournaments = () => {
   return <section className={styles.section}>
      <Image
         className={styles.section__bg}
         width="2140"
         height="493"
         alt="team fortress background"
         src="/images/team-fortress-bg.jpg"
         quality={100}
      />
      <div className={styles.section__info}>
         <p className={styles.section__text}>We haven't found any active tournaments. Try to check back later.</p>
         <span className={styles.section__subtext}>Back to <Link href="/">home</Link></span>
      </div>
   </section>
}

export default TeamFortressTournaments
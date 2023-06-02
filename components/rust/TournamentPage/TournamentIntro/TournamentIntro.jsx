import Container from '@/components/UI/container/Container'
import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Image from 'next/image'
import styles from './TournamentIntro.module.css'

const TournamentIntro = () => {
   return <section className={styles.tournament__intro}>
      <Container>
         <Image 
            className={styles['tournament__intro-image']}
            width="100"
            height="100"
            alt="tournament logo"
            src="/images/tournament.jpg"
         />
         <div className={styles['tournament__intro-inner']}>
            <div className={styles['tournament__intro-inner-content']}>
               <h1 className={styles['tournament__intro-title']}>NA Circuit - Public League</h1>
               <div className={styles['tournament__intro-info']}>
                  <div className={styles['tournament__intro-info-item']}>
                     <h2 className={styles['tournament__intro-info-item-title']}>Starts in: 38m</h2>
                     <p className={styles['tournament__intro-info-item-text']}>Check in: 30m before start</p>
                  </div>
                  <div className={styles['tournament__intro-info-item']}>
                     <h2 className={styles['tournament__intro-info-item-title']}>Server: North America</h2>
                     <p className={styles['tournament__intro-info-item-text']}>Max allowable ping: 120ms</p>
                  </div>
                  <div className={styles['tournament__intro-info-item']}>
                     <h2 className={styles['tournament__intro-info-item-title']}>Mode: 5v5 + 2 substitute</h2>
                     <p className={styles['tournament__intro-info-item-text']}>Competitive de_* maps</p>
                  </div>
               </div>
            </div>
            <div className={styles['tournament__intro-join']}>
               <DefaultButton className={styles['tournament__intro-join-btn']} disabled={true}>
                  Join tournament
               </DefaultButton>
               <p className={styles['tournament__intro-join-text']}>
                  You cannot participate in tournaments as your account is not verified and you are not a team leader.
               </p>
               <span className={styles['tournament__intro-join-teams']}>5 / 12 teams</span>
            </div>
         </div>
      </Container>
   </section>
}

export default TournamentIntro
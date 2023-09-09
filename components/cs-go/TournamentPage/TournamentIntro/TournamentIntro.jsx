import Container from '@/components/UI/container/Container'
import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Image from 'next/image'
import styles from './TournamentIntro.module.css'

const TournamentIntro = ({tournament}) => {
   return <section className={styles.tournament__intro} style={{backgroundImage: `url('${tournament.banner_url}')`}}>
      <Container>
         <Image 
            className={styles['tournament__intro-image']}
            width="100"
            height="100"
            alt="tournament logo"
            src={tournament.icon_url}
         />
         <div className={styles['tournament__intro-inner']}>
            <div className={styles['tournament__intro-inner-content']}>
               <h1 className={styles['tournament__intro-title']}>{tournament.name}</h1>
               <div className={styles['tournament__intro-info']}>
                  <div className={styles['tournament__intro-info-item']}>
                     <h2 className={styles['tournament__intro-info-item-title']}>Starts in: {tournament.starts_in}m</h2>
                     <p className={styles['tournament__intro-info-item-text']}>Check in: {tournament.check_in}m before start</p>
                  </div>
                  <div className={styles['tournament__intro-info-item']}>
                     <h2 className={styles['tournament__intro-info-item-title']}>Server: {tournament.server}</h2>
                     <p className={styles['tournament__intro-info-item-text']}>Max allowable ping: {tournament.max_allowable_ping}ms</p>
                  </div>
                  <div className={styles['tournament__intro-info-item']}>
                     <h2 className={styles['tournament__intro-info-item-title']}>Mode: {tournament.mode_str}</h2>
                     <p className={styles['tournament__intro-info-item-text']}>{tournament.map_pool}</p>
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
               <span className={styles['tournament__intro-join-teams']}>{tournament.current_teams} / {tournament.max_teams} teams</span>
            </div>
         </div>
      </Container>
   </section>
}

export default TournamentIntro
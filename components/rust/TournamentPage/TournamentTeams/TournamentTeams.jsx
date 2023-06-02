import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import styles from './TournamentTeams.module.css'

const TournamentTeams = () => {
   return <section className={styles.team}>
      <Container>
         <h2 className={styles.team__title}>Teams</h2>
         <div className={styles.team__inner}>
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
            <TournamentTeamsItem />
         </div>
      </Container>
   </section>
}

const TournamentTeamsItem = () => {
   return <div className={styles.item}>
      <Image 
         src="/images/icon/hidden-img.svg"
         width="50"
         height="50"
         alt=''
      />
      <h3 className={styles.item__title}>Hidden information</h3>
   </div>
}

export default TournamentTeams
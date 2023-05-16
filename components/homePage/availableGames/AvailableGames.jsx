import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import HomeSectionH2 from '../homeSectionH2/HomeSectionH2'
import styles from './AvailableGames.module.css'

const AvailableGames = () => {
   return <section className={styles.games}>
      <Container>
         <div className={styles.games__inner}>
            <HomeSectionH2>Available games</HomeSectionH2>
            <div className={styles.games__card}>
               <AvailableGamesCard 
                  title="CS:GO"
                  text="Matchmaking, tournaments, ladders"
                  src="/images/cs-go-poster.jpg"
               />
               <AvailableGamesCard 
                  title="Rust"
                  text="Tournaments, ladders"
                  src="/images/rust-poster.jpg"
               />
               <AvailableGamesCard 
                  title="Dota 2"
                  text="Tournaments, ladders"
                  src="/images/dota-poster.jpg"
               />
               <AvailableGamesCard 
                  title="Team Fortress 2"
                  text="Tournaments, ladders"
                  src="/images/tf-poster.jpg"
               />
            </div>
         </div>
      </Container>
   </section>
}

const AvailableGamesCard = ({title, text, src}) => {
   return <div className={styles['games__card-item']}>
      <Image 
         className={styles['games__card-item-image']}
         width="280"
         height="350"
         src={src}
         alt={`${title} poster`}
      />
      <h3 className={styles['games__card-item-title']}>{title}</h3>
      <p className={styles['games__card-item-text']}>{text}</p>
   </div>
}

export default AvailableGames
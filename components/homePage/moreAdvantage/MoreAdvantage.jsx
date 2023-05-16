import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import HomeSectionH2 from '../homeSectionH2/HomeSectionH2'
import styles from './MoreAdvantage.module.css'

const MoreAdvantage = () => {
   return <section className={styles.advantage}>
      <Container>
         <div className={styles.advantage__inner}>
            <HomeSectionH2>
               But wait, there’s more
            </HomeSectionH2>
            <div className={styles.advantage__flex}>
               <MoreAdvantageItem 
                  src="/images/expanded-stats.jpg"
                  title="EXPENDED STATS"
                  text="Analyze your stats to make better decisions. Detailed statistics allow you to track your progress as your rating increases."
               />
               <MoreAdvantageItem 
                  src="/images/play-along.jpg"
                  title="PLAY ALONG WITH OTHER PLAYERS"
                  text="Join a team or create your own for free! Compete at different levels of the game with interesting opponents."
               />
               <MoreAdvantageItem 
                  src="/images/tournaments.jpg"
                  title="TOURNAMENTS"
                  text="Play in leagues and tournaments to win prizes, from money to skins, and even gaming equipment!"
               />
            </div>
         </div>
      </Container>
   </section>
}

const MoreAdvantageItem = ({title, text, src}) => {
   return <div className={styles.advantage__item}>
      <Image 
         className={styles['advantage__item-image']}
         src={src}
         width="638"
         height="418"
         alt={title}
      />
      <div className={styles['advantage__item-info']}>
         <h3 className={styles['advantage__item-info-title']}>{title}</h3>
         <p>{text}</p>
      </div>
   </div>
}

export default MoreAdvantage
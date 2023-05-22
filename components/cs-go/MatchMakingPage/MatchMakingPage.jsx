import TitleSection from '@/components/UI/titleSection/TitleSection'
import MatchMakingCard from './MatchMakingCard/MatchMakingCard'
import styles from './MatchMakingPage.module.css'

const MatchMakingPage = () => {
   return <>
      <TitleSection
         className={styles['title-section']}
         title="Play 10 games for a chance to win a share of $10.00"
      >
         <p>The more you win, the higher your chance of getting picked.</p>
         <p>5 winners are chosen randomly every Monday!</p>
      </TitleSection>
      <div className={styles.mode__inner}>
         <MatchMakingCard 
            title="Aim map pool"
            mode="1v1"
            maps="aim_map, awp_india, aim_redline"
            src="/images/aim-map-1v1.jpg"
         />
         <MatchMakingCard 
            title="Aim map pool"
            mode="2v2"
            maps="aim_map, awp_india, aim_redline"
            src="/images/aim-map-2v2.jpg"
         />
         <MatchMakingCard 
            title="Competitive map pool"
            mode="5v5"
            maps="Competitive de_* maps"
            src="/images/competitive-map-5v5.jpg"
         />
      </div>
   </>
}

export default MatchMakingPage
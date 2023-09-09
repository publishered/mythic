import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import styles from './TournamentOverview.module.css'

const formatToDoubleDecimalSymbol = price => {

}

const TournamentOverview = ({tournament}) => {
   return <section className={styles.overview}>
      <Container>
         <h2 className={styles.overview__title}>Overview</h2>
         <div className={styles.overview__inner}>
            <div className={styles.overview__group}>
               <h3 className={styles['overview__group-title']}>Prizes</h3>
               <div className={styles['overview__group-body']}>
                  <ul className={styles['overview__group-list']}>
                     <li className={styles['overview__group-list-item']}>
                        <div className={styles['overview__group-list-item-left']}>
                           <Image 
                              src="/images/icon/prize-first.svg"
                              width="17"
                              height="17"
                              alt="first place"
                           />
                           First Place
                        </div>
                        <span className={styles['overview__group-list-item-right']}>{tournament.first_place.toFixed(2)}$</span>
                     </li>
                     <li className={styles['overview__group-list-item']}>
                        <div className={styles['overview__group-list-item-left']}>
                           <Image 
                              src="/images/icon/prize-second.svg"
                              width="17"
                              height="17"
                              alt="second place"
                           />
                           Second Place
                        </div>
                        <span className={styles['overview__group-list-item-right']}>{tournament.second_place.toFixed(2)}$</span>
                     </li>
                     <li className={styles['overview__group-list-item']}>
                        <div className={styles['overview__group-list-item-left']}>
                           <Image 
                              src="/images/icon/prize-third.svg"
                              width="17"
                              height="17"
                              alt="third place"
                           />
                           Third Place
                        </div>
                        <span className={styles['overview__group-list-item-right']}>{tournament.third_place.toFixed(2)}$</span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={styles.overview__group}>
               <h3 className={styles['overview__group-title']}>Settings</h3>
               <div className={styles['overview__group-body']}>
                  <ul className={styles['overview__group-list']}>
                     <li className={styles['overview__group-list-item']}>
                        <span>Max rounds</span>
                        <span className={styles['overview__group-list-item-right']}>{tournament.max_rounds}</span>
                     </li>
                     <li className={styles['overview__group-list-item']}>
                        <span>Map pool</span>
                        <span className={styles['overview__group-list-item-right']}>{tournament.map_pool}</span>
                     </li>
                     <li className={styles['overview__group-list-item']}>
                        <span>Game mode</span>
                        <span className={styles['overview__group-list-item-right']}>{tournament.game_mode}</span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={styles.overview__group}>
               <h3 className={styles['overview__group-title']}>Player requirements</h3>
               <div className={styles['overview__group-body']}>
                  <ul className={styles['overview__group-requirements']}>
                     {tournament.req_steam_guard ? 
                     <li className={styles['overview__group-requirements-item']}>
                        <Image 
                           src="/images/icon/requirements-steam.svg"
                           width="16"
                           height="16"
                           alt="require prime"
                        />
                        Steam Mobile Guard
                     </li>
                     : ''}
                     {tournament.req_mythic_verification ? 
                     <li className={styles['overview__group-requirements-item']}>
                        <Image 
                           src="/images/icon/requirements-verified.svg"
                           width="16"
                           height="16"
                           alt="require prime"
                        />
                        Mythic Verification
                     </li>
                     : ''}
                     {tournament.req_mythic_prime ?
                     <li className={styles['overview__group-requirements-item']}>
                        <Image 
                           src="/images/icon/requirements-prime.svg"
                           width="16"
                           height="16"
                           alt="require prime"
                        />
                        Mythic Prime
                     </li>
                     : ''}
                  </ul>
               </div>
            </div>
            <div className={styles.overview__group}>
               <h3 className={styles['overview__group-title']}>{tournament.server} Server</h3>
               <div className={styles['overview__group-body']}>
                  <p className={styles['overview__group-body-text']}>
                     Tournament is hosted on an {tournament.server} server. If you are located outside of the {tournament.server}, we suggest choosing a tournament hosted on another server for the better gaming experience.
                  </p>
               </div>
            </div>
         </div>
      </Container>
   </section>
}

export default TournamentOverview
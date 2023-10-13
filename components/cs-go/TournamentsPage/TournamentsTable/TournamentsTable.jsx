import TournamentsItem from '../TournamentsItem/TournamentsItem'
import styles from './TournamentsTable.module.css'

const TournamentsTable = ({tournaments}) => {


   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span>Tournament</span>
         <span></span>
         <span>Mode</span>
         <span>Schedule</span>
         <span>Reward</span>
         <span>Registered</span>
         <span>Requirements</span>
      </div>
      <div className={styles.table__body}>
         {tournaments.map((item, index) => (
            <TournamentsItem 
               src={item.icon_url}
               title={item.name}
               checkIn={`${item.check_in}m`}
               startsIn={`${item.starts_in}`}
               reward={`$${item.reward}`}
               registered={`${item.current_teams} / ${item.max_teams}`}
               mode={item.mode}
               steamGuard={item.req_steam_guard}
               mythicVerification={item.req_mythic_verification}
               mythicPrime={item.req_mythic_prime}
               game={item.game}
               url={item.url}
               key={index}
            />
         ))}
         {/* <TournamentsItem 
            src="/images/tournament.jpg"
            title="NA Circuit - Public League"
            checkIn="30m"
            startsIn="50m"
            reward="$0.00"
            registered="0 / 16"
            mode="5v5"
         />
         <TournamentsItem 
            src="/images/tournament.jpg"
            title="NA Circuit - Public League"
            checkIn="30m"
            startsIn="1h 30m"
            reward="$0.00"
            registered="0 / 16"
            mode="5v5"
         />
         <TournamentsItem 
            src="/images/tournament.jpg"
            title="NA Circuit - Public League"
            checkIn="30m"
            startsIn="6h 25m"
            reward="$0.00"
            registered="0 / 16"
            mode="5v5"
         />
         <TournamentsItem 
            src="/images/tournament.jpg"
            title="NA Circuit - Public League"
            checkIn="30m"
            startsIn="22h 25m"
            reward="$0.00"
            registered="0 / 16"
            mode="5v5"
         />
         <TournamentsItem 
            src="/images/tournament.jpg"
            title="NA Circuit - Public League"
            checkIn="30m"
            startsIn="50m"
            reward="$0.00"
            registered="0 / 16"
            mode="5v5"
         />
         <TournamentsItem 
            src="/images/tournament.jpg"
            title="NA Circuit - Public League"
            checkIn="30m"
            startsIn="50m"
            reward="$0.00"
            registered="0 / 16"
            mode="5v5"
         />
         <TournamentsItem 
            src="/images/tournament.jpg"
            title="NA Circuit - Public League"
            checkIn="30m"
            startsIn="50m"
            reward="$0.00"
            registered="0 / 16"
            mode="5v5"
         /> */}
      </div>
   </div>
}

export default TournamentsTable
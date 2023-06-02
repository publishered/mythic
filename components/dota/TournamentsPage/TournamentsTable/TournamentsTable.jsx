import TournamentsItem from '../TournamentsItem/TournamentsItem'
import styles from './TournamentsTable.module.css'

const TournamentsTable = () => {
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
         />
      </div>
   </div>
}

export default TournamentsTable
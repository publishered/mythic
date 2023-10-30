import TitleSection from '@/components/UI/titleSection/TitleSection'
import { useState } from 'react'
import TournamentsFilters from './TournamentsFilters/TournamentsFilters'
import styles from './TournamentsPage.module.css'
import TournamentsTable from './TournamentsTable/TournamentsTable'

function filterAndSortData(data, mode, time) {
   const result = {}; // Новый объект для хранения отфильтрованных данных
 
   for (const timestamp in data) {
     if (data.hasOwnProperty(timestamp)) {
       const tournaments = data[timestamp];
       const filteredTournaments = tournaments
       .filter(tournament => tournament.mode === mode)
       .filter(tournament => tournament.status === time);
 
       // Если остались турниры после фильтрации, сохраняем их в новом объекте
       if (filteredTournaments.length > 0) {
         result[timestamp] = filteredTournaments;
       }
     }
   }
 
   return result;
}

function filterAndSortDataWithoutMode(data, time) {
   const result = {}; // Новый объект для хранения отфильтрованных данных
 
   for (const timestamp in data) {
     if (data.hasOwnProperty(timestamp)) {
       const tournaments = data[timestamp];
       const filteredTournaments = tournaments
       .filter(tournament => tournament.status === time);
 
       // Если остались турниры после фильтрации, сохраняем их в новом объекте
       if (filteredTournaments.length > 0) {
         result[timestamp] = filteredTournaments;
       }
     }
   }
 
   return result;
}

const sortObject = o => Object.keys(o).sort((a, b) => a < b).reduce((r, k) => (r[k] = o[k], r), {})

const TournamentsPage = ({tournaments, game}) => {

   const [timeFilter, setTimeFilter] = useState('upcoming')
   const [modeFilter, setModeFilter] = useState('1v1')

   console.log(timeFilter)

   const filteredTournamentsByModeAndTime = (game === 'cs-go') ?
   sortObject(filterAndSortData(tournaments, modeFilter, timeFilter)) :
   sortObject(filterAndSortDataWithoutMode(tournaments, timeFilter))

   console.log(filteredTournamentsByModeAndTime)


   return <>
      <TitleSection 
         title="Play 3 tournaments for a chance to win a share of $25.00"
         className={styles['tournaments__title']}
      > 
         <p>The more you win, the higher your chance of getting picked.</p>
         <p>3 winners are chosen randomly every Monday!</p>
      </TitleSection>
      <TournamentsFilters 
         timeFilter={timeFilter}
         setTimeFilter={setTimeFilter}

         modeFilter={modeFilter}
         setModeFilter={setModeFilter}

         game={game}
      />
      {
         Object.keys(filteredTournamentsByModeAndTime).map((keyName, index) => (
            <div className={styles.group} key={index}>
               <h2 className={styles.tournaments__date}>{filteredTournamentsByModeAndTime[keyName][0].date}</h2>
               <TournamentsTable tournaments={filteredTournamentsByModeAndTime[keyName]}/>
               {/* <button className={styles.tournaments__loadMore}>
                  load more
               </button> */}
            </div>
         ))
      }
      
      
   </>
}

export default TournamentsPage
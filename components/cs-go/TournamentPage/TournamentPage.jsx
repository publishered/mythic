import TournamentIntro from './TournamentIntro/TournamentIntro'
import TournamentOverview from './TournamentOverview/TournamentOverview'
import TournamentPrime from './TournamentPrime/TournamentPrime'
import TournamentTeams from './TournamentTeams/TournamentTeams'
import TournamentsMatches from './TournamentsMatches/TournamentsMatches'

const TournamentPage = ({tournament}) => {

   console.log(tournament)

   return <>
      <TournamentIntro tournament={tournament} />
      <TournamentOverview tournament={tournament} />
      <TournamentPrime />
      <TournamentsMatches />
      <TournamentTeams />
   </>
}

export default TournamentPage
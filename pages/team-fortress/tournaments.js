import TeamFortressTournaments from '@/components/team-fortress/tournamets/TeamFortressTournaments'
import seo from '@/services/seo'
import Head from 'next/head'

const CsGoTournaments = () => {
   return <>
      <Head>
         <title>{seo.generateTitle(`Tournaments in Team Fortress`)}</title>
      </Head>
      <TeamFortressTournaments />
   </>
}

export default CsGoTournaments
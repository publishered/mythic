import Image from 'next/image'
import HelpLayout from '../helpLayout/HelpLayout'

import styles from './OurTeam.module.css'

const OurTeam = () => {
   return <HelpLayout>
      <h1>OUR TEAM</h1>
      <div data-section="section">
         <p>Headquartered in London we have rapidly grown to 80 people and expanded into sunny LA and snowy Turin.Everyone at MYTHIC has a passion for competitive gaming and esports and are experts in their field. From former pro players and shoutcasters, media directors, developers, product managers, lawyers, partnership managers, human resources, finance; MYTHIC caters a diverse and international team.</p>
         <p>Together, we work hard, innovate constantly, collaborate and solve different issues with out-of-the box solutions. But we also love having a good laugh, going for beers together after work and of course playing!</p>
         <p>If you would like to join us, head over to our Available Jobs section but beware that in order to become part of our small and precious family you will need to pass several challenges, including surviving our weekly gaming session!</p>
      </div>
      <Image src="/images/our-team.png" className={styles.img} width="1618" height="773" alt='our team' />
   </HelpLayout>
}

export default OurTeam
import Image from 'next/image'
import HelpLayout from '../helpLayout/HelpLayout'
import styles from './About.module.css'

const About = () => {
   return <HelpLayout>
      <Image className={styles.img} src="/images/about-us.png" width="1621" height="406"/>
      <h1>ABOUT MYTHIC PLAY</h1>
      <div data-section="section">
         <p>FACEIT is the leading independent competitive gaming platform for online multiplayer PvP gamers with more than twenty million users. We aim to further the esports ecosystem by offering players of all levels the chance to compete in a competitive environment with the games they love while providing publishers and third party organisers with the tools needed to build their competitive community.</p>
      </div>
      <div data-section="section">
         <h2>Information we collect from other sources</h2>
         <p>The FACEIT team developed their own proprietary platform that integrates the world’s leading competitive games and helps each publisher and organiser build a strong competitive community.</p>
         <p>FOR GAME PUBLISHERS AND DEVELOPERS</p>
         <p>Our platform offers all the tools required for publishers and developers to reinforce the esports ecosystem around their game thanks to the advanced software development kit (SDK) which provides game creators with the necessary tools to integrate user-friendly matchmaking, tournaments, and leagues into their titles.</p>
         <p>Once a game creator has utilised our SDK and successfully integrated with FACEIT, esports organisations, players, and communities for that title will be able to create, manage, and promote their own online competitions and tournaments.</p>
         <p>FOR THIRD PARTY ORGANIZERS</p>
         <p>The FACEIT platform allows organisers to create, distribute and manage their competitions to their communities with the tools and the technology available via the platform. Moreover, FACEIT has already a strong community, and organizers have the possibility to take advantage of it and build an even wider community by mixing them.</p>
      </div>
      <div data-section="section">
         <h2>OUR COMMUNITY</h2>
         <p>The FACEIT platform is the home for players of all skill sets: from the bronze league player trying to improve their performance, or a semi-professional looking to practice with his team, compete at the highest levels and qualify to the next season of our FPL, FACEIT is the right platform for you.</p>
         <p>We want to help players improve, have fun, get rewarded and most importantly win. FACEIT is a place where gamers can find and connect and chat with each other, made even easier thanks to our Hubs and Recommendation system. FACEIT is the place where players can find their next friend, teammate or career.</p>
         <p>On FACEIT, players and teams can:</p>
         <ul>
            <li>Participate into tournaments, championships, leagues and ladders;</li>
            <li>Join the hub right for them, where they can meet like-minded people with whom they can play;</li>
            <li>Find friends;</li>
            <li>Follow Professional Players and check their stats and rankings in the FPL;</li>
            <li>Chat and be connected;</li>
            <li>Be featured on our homepage if you connect a streaming platform and broadcast your games whilst competing on FACEIT;</li>
            <li>Be rewarded: earn FACEIT Points whilst playing and exchange them for prizes on our Store;</li>
            <li>Be part of the biggest community of competitive gamers around the world.</li>
         </ul>
      </div>
   </HelpLayout>
}

export default About
import HelpLayout from '../helpLayout/HelpLayout'
import styles from './Help.module.css'

const Help = () => {
   return <HelpLayout>
      <div className={styles.top}>
         <h1>Help</h1>
         <ul>
            <li><a href="#new-and-returning-players">NEW AND RETURNING PLAYERS</a></li>
            <li><a href="#connecting-the-correct-discord-account">CONNECTING THE CORRECT DISCORD ACCOUNT</a></li>
            <li><a href="#do-i-have-to-use-discord">DO I HAVE TO USE DISCORD?</a></li>
            <li><a href="#do-i-have-to-pay-to-use-this-service">DO I HAVE TO PAY TO USE THIS SERVICE?</a></li>
            <li><a href="#do-i-need-faceit-premium">DO I NEED FACEIT PREMIUM?</a></li>
            <li><a href="#do-i-need-to-subscribe-to-every-division">DO I NEED TO SUBSCRIBE TO EVERY DIVISION?</a></li>
            <li><a href="#do-we-gain-and-lose-elo">DO WE GAIN AND LOSE ELO?</a></li>
            <li><a href="#how-does-team-and-map-selection-work">HOW DOES TEAM AND MAP SELECTION WORK?</a></li>
            <li><a href="#the-server-is-saying-my-anti-cheat-is-not-enabled">THE SERVER IS SAYING MY ANTI-CHEAT IS NOT ENABLED?</a></li>
            <li><a href="#how-do-i-contact-an-admin-for-help">HOW DO I CONTACT AN ADMIN FOR HELP?</a></li>
            <li><a href="#what-is-an-outage-map-and-how-do-i-find-mine">WHAT IS AN OUTAGE MAP AND HOW DO I FIND MINE?</a></li>
            <li><a href="#when-will-i-get-my-prize">WHEN WILL I GET MY PRIZE?</a></li>
            <li><a href="#how-do-you-qualify-for-fpl-challenger">HOW DO YOU QUALIFY FOR FPL CHALLENGER?</a></li>
            <li><a href="#connection-failed-after-30-retries">CONNECTION FAILED AFTER 30 RETRIES?</a></li>
            <li><a href="#steam-id-now-allowed-must-connect-from-a-lobby">STEAM ID NOW ALLOWED / MUST CONNECT FROM A LOBBY</a></li>
         </ul>
         <div data-section="big-section" id="new-and-returning-players">
            <h1>1. NEW AND RETURNING PLAYERS</h1>
            <div data-section="section">
               <h2>I. NEW PLAYERS</h2>
               <p>In order to unlock the ability to queue and use Mythic League features first your account must be successfully authorized with our system.</p>
               <p>Before completing the following setup it is recommended that you ensure that your FACEIT account and your Discord account are logged in on your main web browser. This will reduce the chance of error during the setup process.</p>
            </div>
            <div data-section="section">
               <h2>II. ACCOUNT SETUP / AUTHORIZATION</h2>
               <ol>
                  <li>Make sure that you reside in one of our <a href="https://mythicleague.com/rules#8">allowed locations.</a></li>
                  <li>Make sure that you meet the <a href="https://mythicleague.com/rules#1i">minimum match limit</a> for the division that matches your ELO.</li>
                  <li>Join our <a href="https://discord.mythicleague.com/">Discord Server.</a></li>
                  <li>Join the division that matches your ELO (Bronze, Silver, Gold)</li>
                  <li><a href="https://ml-face.it/subscribe">Subscribe</a> to Mythic League.</li>
                  <li><a href="https://ml-face.it/auth">Authorize</a> your account to our service and complete registration by reviewing and agreeing to the <a href="https://mythicleague.com/rules">Mythic League Rules.</a></li>
                  <li>Click the "Sync Account" button and watch the screen for a response in RED text. If successful, your Discord username will turn GREEN.</li>
               </ol>
               <p>If you receive an error message after clicking Sync Account please follow that error message to the appropriate FAQ section for resolution.</p>
            </div>
            <div data-section="section">
               <h2>III. HOW TO PLAY</h2>
               <ol>
                  <li>Load up FACEIT.com or the FACEIT standalone client.</li>
                  <li>Load up the FACEIT Anti-Cheat and make sure it is up-to-date.</li>
                  <li>Join the AUTO-VOIP Discord channel in the Mythic League Discord.</li>
                  <li>Press the Play button in your current division!</li>
               </ol>
            </div>
            <div data-section="section">
               <h2>IV. RETURNING PLAYERS</h2>
               <p>If you were a previously subscribed and authorized player in Mythic League you do not need to complete the Account Setup / Authorization process a second time in most cases. Follow the steps below:</p>
               <ol>
                  <li>Navigate to your Mythic League profile either through our <a href="https://support.mythicleague.com/profile">Support Website</a>, Discord (!profile) or the Hub chat (!profile)</li>
                  <li>Check that your details and connections are still the same: Discord account, FACEIT account and tradelink.</li>
                  <li>If all details are correct hit the Sync Account button and wait for the response in red text. If successful, your Discord username will turn GREEN and you are ready to play again.</li>
               </ol>
               <p>If you have changed Discord account you can either re-authorize or swap your Discord on your profile page before hitting Sync Account.</p>
            </div>
         </div>
         <div data-section="big-section" id="connecting-the-correct-discord-account">
            <h1>2. CONNECTING THE CORRECT DISCORD ACCOUNT</h1>
            <div data-section="section">
               <p>Check that the Discord identifier (MyAccount#0001) found on your Mythic League profile matches the one that is found in the lower left of your Discord client.</p>
               <p>If these do not match, it means that you have a different account signed into the browser as the client and as a result the Account Setup / Authorization process may fail. In order to resolve this, you will need to logout of the Discord browser instance and login with the correct account (the one that your Discord client is using). The steps to do this are:</p>
               <ol>
                  <li>Visit <a href="https://discordapp.com/channels/@me">https://discordapp.com/channels/@me.</a></li>
                  <li>Click the "User Settings" cog wheel in the lower left of the screen.</li>
                  <li>Click "Log Out".</li>
                  <li>Now you can complete Account Setup / Authorization and will be prompted to login to the correct Discord account during this process.</li>
               </ol>
            </div>
         </div>
         <div data-section="big-section" id="do-i-have-to-use-discord">
            <h1>3. DO I HAVE TO USE DISCORD?</h1>
            <div data-section="section">
               <p>Yes. Discord is required in order to play in Mythic League. You will be asked to link your Discord account with our system during the authorization process before being able to queue. Authorization: <a href="https://mythicleague.com/https://ml-face.it/auth">ml-face.it/auth.</a></p>
              <p>Your permission to queue in each Division will be restricted until your authorization is successful. (If successful, your Discord username will turn GREEN).</p>
              <p>Users competing in the Mythic Diamond Division will be using our private TeamSpeak server for their match communication (details can be found <a href="https://mythicleague.com/teamspeak">here</a>) but it is recommended to have your Discord linked in order to use the #support channel as well as queue in the other divisions.</p>
            </div>
         </div>
         <div data-section="big-section" id="do-i-have-to-pay-to-use-this-service">
            <h1>4. DO I HAVE TO PAY TO USE THIS SERVICE?</h1>
            <div data-section="section">
               <p>The Mythic League solo queue Divisions (Bronze, Silver, Gold, Diamond) all require a Mythic League organization subscription which starts at $6 per month.</p>
              <p>The Mythic League Community experience is free to all users but you can represent and support us directly with a profile badge and other extras by purchasing a subscription.</p>
              <p>Tournaments and Cups hosted by Mythic League will most commonly be free to enter. Any events requiring a Mythic League organization subscription will be clearly described as such.</p>
            </div>
         </div>
         <div data-section="big-section" id="do-i-need-faceit-premium">
            <h1>5. DO I NEED FACEIT PREMIUM?</h1>
            <div data-section="section">
               <p>No, you only require an active subscription to our hub organizer, Mythic League.</p>
            </div>
         </div>
         <div data-section="big-section" id='do-i-need-to-subscribe-to-every-division'>
            <h1>6. DO I NEED TO SUBSCRIBE TO EVERY DIVISION?</h1>
            <div data-section="section">
               <p>No. You only need to subscribe to the organization. You will gain hub access based upon your level to the correct division.</p>
            </div>
         </div>
         <div data-section="big-section" id='do-we-gain-and-lose-elo'>
            <h1>7. DO WE GAIN AND LOSE ELO?</h1>
            <div data-section="section">
               <p>Yes, ELO is enabled in Mythic League. You can earn and lose ELO when playing solo in Mythic Bronze, Silver and Gold as well as playing either solo or in a group in the Mythic League Community hub.</p>
            </div>
         </div>
         <div data-section="big-section" id='how-does-team-and-map-selection-work'>
            <h1>8. HOW DOES TEAM AND MAP SELECTION WORK?</h1>
            <div data-section="section">
               <p>A captain is chosen by either ELO or Leaderboard Position, and will take turns vetoing maps until a single map is left. In regards for teams, players will take turns selecting players in the format ABBAABBA.</p>
            </div>
         </div>
         <div data-section="big-section" id='the-server-is-saying-my-anti-cheat-is-not-enabled'>
            <h1>9. THE SERVER IS SAYING MY ANTI-CHEAT IS NOT ENABLED?</h1>
            <div data-section="section">
               <p>If you connect to a server and are kicked with a reason telling you that the anti-cheat is not enabled. Follow the steps below:</p>
               <ul>
                  <li>Ensure that you have the Anti-Cheat running.</li>
                  <li>If the Anti-Cheat is running and you receive this message, quit the Anti-Cheat through the task manager and restart the application.</li>
               </ul>
            </div>
         </div>
         <div data-section="big-section" id='how-do-i-contact-an-admin-for-help'>
            <h1>10. HOW DO I CONTACT AN ADMIN FOR HELP?</h1>
            <div data-section="section">
               <p>You can contact the Mythic League Support staff in the following ways:</p>
               <ol>
                  <li>If you are in a live game in any of our solo-queue Divisions, navigate to the matchroom page and hit the Contact Admin button.</li>
                  <li>If you are not in a live game and need assistance with general support queries you can contact us by tagging the @Support role in our #support Discord channel and leave your question.</li>
                  <li>If you would like to report players for breaking rules anywhere in Mythic League (in-game, Discord, chats) please create a report <a href="https://support.mythicleague.com/reports/create">here</a> on our support website.</li>
               </ol>
            </div>
         </div>
         <div data-section="big-section" id='what-is-an-outage-map-and-how-do-i-find-mine'>
            <h1>11. WHAT IS AN OUTAGE MAP AND HOW DO I FIND MINE?</h1>
            <div data-section="section">
               <p>Most power and internet providers will provide an up-to-date feed and/or interactive map of areas that are currently or have been affected by a service disruption. You can often find these on the provider's main website under a heading such as “Outages”. Some providers will have a live-feed of updates on an associated Twitter account.</p>
               <p>Each company is different, some may require an account number or other information about your residence to view outage information, while others may provide a map that can be searched.</p>
               <p>Please provide your outage map as soon as possible so that we can verify any issues you may have experienced.</p>
            </div>
         </div>
         <div data-section="big-section" id='when-will-i-get-my-prize'>
            <h1>12. WHEN WILL I GET MY PRIZE?</h1>
            <div data-section="section">
               <p>Prizes are sent out between two and four weeks following the end of the monthly season (the monthly season consists of both Week 1 & 2 and Week 3 & 4 leaderboards).</p>
               <p>If you are placed for a prize, make sure that your tradelink or PayPal address is set correctly on your profile and ensure that you are able to accept trades from all users.</p>
               <p>Estimated delivery dates for each season as well as other updated information can be found in the #prizes channel on the Mythic League Discord.</p>
            </div>
         </div>
         <div data-section="big-section" id='how-do-you-qualify-for-fpl-challenger'>
            <h1>13. HOW DO YOU QUALIFY FOR FPL CHALLENGER?</h1>
            <div data-section="section">
               <p>There are two ways to qualify for the NA FPL Challenger division in Mythic League:</p>
               <ol>
                  <li>The 45 top placing players of each Diamond monthly season will be rewarded with invitations to the NA FPL-C qualifiers.</li>
                  <li>The top 5 placing players of each Gold monthly season will be rewarded with invitations to the NA FPL-C qualifiers AND a trial invitation to the Diamond division.</li>
               </ol>
               <p>The NA FPL-C qualifier event will be announced in the following month and all players who qualified will be invited directly by FACEIT. Players will play in a weekend long event which will see the top 5 invited into the FPL Challenger League.</p>
            </div>
         </div>
         <div data-section="big-section" id='connection-failed-after-30-retries'>
            <h1>14. CONNECTION FAILED AFTER 30 RETRIES?</h1>
            <div data-section="section">
               <p>Occasionally players may receive an error that prints in the user’s console as “Retrying public…” repeatedly until finally failing to connect. This error can be easily resolved by following these steps:</p>
               <ol>
                  <li>Exit your game completely</li>
                  <li>Navigate to Steam and select Counter-Strike: Global Offensive</li>
                  <li>Right-click and select Properties from the context menu</li>
                  <li>Under the General tab, select Launch Options</li>
                  <li>Create an additional launch option string as "+clientport 2700X” with X representing a new value that is not 5. e.g. 6/7/8/9</li>
                  <li>Relaunch your game and connect to the server</li>
               </ol>
            </div>
         </div>
         <div data-section="big-section" id='STEAM ID NOW ALLOWED / MUST CONNECT FROM A LOBBY'>
            <h1>15. STEAM ID NOT ALLOWED / MUST CONNECT FROM A LOBBY</h1>
            <div data-section="section">
               <p>Occasionally players may receive either of these two errors when attempting to join a game server. These are both very simple fixes and should not require extended connection time from an admin.</p>
               <p>NOTE: We DO NOT recommend ever using the “Go to Server” button on the match page.</p>
            </div>
            <div data-section="section">
               <h2>I. STEAM ID NOT ALLOWED</h2>
               <p>In order of priority:</p>
               <ol>
                  <li>Refresh the lobby page and ensure that you have copied the correct and current IP address for the game before joining through the game console.</li>
                  <li>Exit CS:GO and relaunch the game before joining with the correct IP address through the game console.</li>
                  <li>Make sure that you are logged into the correct Steam account for your FACEIT account.</li>
               </ol>
            </div>
            <div data-section="section">
               <h2>II. MUST CONNECT FROM A LOBBY</h2>
               <ol>
                  <li>Exit CS:GO and relaunch the game before joining with the correct IP address through the game console.</li>
               </ol>
            </div>
         </div>
      </div>
   </HelpLayout>
}

export default Help
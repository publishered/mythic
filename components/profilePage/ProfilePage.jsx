import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Container from '../UI/container/Container'
import styles from './ProfilePage.module.css'
import ProfilePageFriends from './profilePageFriends/ProfilePageFriends'
import ProfilePageInvites from './profilePageInvites/ProfilePageInvites'
import ProfilePageMatches from './profilePageMatches/ProfilePageMatches'
import ProfilePageTeams from './profilePageTeams/ProfilePageTeams'
import ProfilePageTopSection from './profilePageTopSection/ProfilePageTopSection'
import ProfilePageTournaments from './profilePageTournaments/ProfilePageTournaments'

const ProfilePage = ({friends, friendInvites}) => {

   const {asPath} = useRouter()
   const [activeAnchor, setActiveAnchor] = useState('matches')

   useEffect(() => {
      if (asPath.split('#')[1] === 'connect') return
      asPath.split('#')[1] ? setActiveAnchor(asPath.split('#')[1]) : ''
   }, [asPath]);

   return <section className={styles.profile}>
      <Container>
         <ProfilePageTopSection activeAnchor={activeAnchor}/>
         {activeAnchor === 'matches' ? 
            <ProfilePageMatches />
         : ''}

         {activeAnchor === 'tournaments' ? 
            <ProfilePageTournaments />
         : ''}

         {activeAnchor === 'teams' ? 
            <ProfilePageTeams />
         : ''}

         {activeAnchor === 'friends' ? 
            <ProfilePageFriends friends={friends} />
         : ''}

         {activeAnchor === 'invites' ? 
            <ProfilePageInvites friendInvites={friendInvites} />
         : ''}
      </Container>
   </section>
} 

export default ProfilePage
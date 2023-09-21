import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import getColorForRank from '@/functions/getColorForRank'
import addFriends from '@/services/friends/addFriends'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import styles from './PlayersListPageTableItem.module.css'

const PlayersListPageTableItem = ({nickname, country_code, rank, avatar_path, isAuth, id, auth_token, friend_status}) => {

   const [friendStatus, setFriendStatus] = useState(friend_status)

   useEffect(() => {
      setFriendStatus(friend_status)
   }, [friend_status])

   const rankColor = getColorForRank(rank)

   const addFriendHandler = async () => {
      const response = await addFriends(auth_token, id)

      if (response === 'success') {
         setFriendStatus('Request sent')
      }
   }

   const {push} = useRouter()

   const acceptFriendHandler = () => {
      push('/profile#invites')
   }

   let btnDisabled = false

   switch (friendStatus) {
      case 'friend':
      case 'Request sent':
         btnDisabled = true
         break
   }

   let btnText = 'Add friend'

   switch (friendStatus) {
      case 'friend':
         btnText = 'Your friend'
         break
      case 'Request sent':
         btnText = 'Request sent'
         break
      case 'Accept Invite':
         btnText = 'Accept Invite'
         break
   }

   return <>
      <div className={`${styles.item}`}>
         <div className={styles.item__username}>
            <Image 
               className={styles['item__username-avatar']}
               src={avatar_path}
               width="70"
               height="70"
               alt="avatar"
            />
            <div className={styles['item__username-nick-wrapper']}>
               <h2 className={styles['item__username-nick']}>{nickname}</h2>
               {/* <Image
                  className={styles['item__username-nick-flag']}
                  width="17"
                  height="13"
                  src="/images/flags/sweden.svg"
               /> */}
               <ReactCountryFlag 
                  className={styles['item__username-nick-flag']}
                  countryCode={country_code}
                  width="17"
                  height="13"
                  alt='flag'
                  svg
                  style={
                     {
                        width: "17px", 
                        height: "13px",
                        borderRadius: "3px"
                     }
                  }
               />
               <span 
                  className={styles['item__username-nick-rank']}
                  style={{backgroundColor: rankColor.rankBackground, color: rankColor.isBlack ? 'var(--light-gray-color)' : ''}}
               >
                  {rank}
               </span>
            </div>
         </div>
         {isAuth ? <DefaultButton 
            className={styles.item__btn}
            onClick={friendStatus === 'Accept Invite' ? acceptFriendHandler : addFriendHandler}
            disabled={btnDisabled}
         >
            
            {btnText}
         </DefaultButton> : ''}
      </div>
   </>
}

export default PlayersListPageTableItem
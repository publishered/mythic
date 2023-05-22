import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './HeaderSidebarFriend.module.css'

const HeaderSidebarFriend = () => {

   const [isOpen, setIsOpen] = useState(false)
   const [friendsTopHeight, setFriendsTopHeight] = useState(false)
   const friendsTopRef = useRef()

   useEffect(() => {
      setFriendsTopHeight(friendsTopRef.current.offsetHeight)
   }, [friendsTopRef])

   return <div 
         className={`${styles.friends} ${isOpen ? styles.open : ''}`}
         style={{'--offset-height': `${friendsTopHeight}px`}}
      >
      <button 
         className={styles.friends__top}
         onClick={() => setIsOpen(!isOpen)}
         ref={friendsTopRef}
      >
         <h3 className={styles['friends__top-title']}>Friends</h3>
         <Image 
            className={styles['friends__top-arrow']}
            src="/images/icon/arrow-up.svg"
            width="9"
            height="5"
            alt='arrow'
         />
      </button>
      <div className={styles.friends__body}>
         <div className={styles['friends__add']}>
            <Image 
               className={styles['friends__add-image']}
               src="/images/icon/add-friends.svg"
               width="96"
               height="52"
               alt=''
            />
            <h2 className={styles['friends__add-title']}>You have no friends.</h2>
            <p className={styles['friends__add-text']}>You can add players as friends directly from their profiles.</p>
            <span className={styles['friends__add-search']}>
               Search by <Link className={styles['friends__add-link']} href="/profile/friends">nickname</Link>
            </span>
         </div>
      </div>
   </div>
}

export default HeaderSidebarFriend
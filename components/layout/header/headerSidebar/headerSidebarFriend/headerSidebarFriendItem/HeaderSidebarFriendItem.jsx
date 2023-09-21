import deleteFriend from '@/services/friends/deleteFriend'
import Image from 'next/image'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import Cookies from 'universal-cookie'
import styles from './HeaderSidebarFriendItem.module.css'

const HeaderSidebarFriendItem = ({avatar_path, nickname, country_code, friend_id, getAllFriendsFunc}) => {

   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const cookie = new Cookies()

   const deleteFriendHandler = async () => {
      const response = await deleteFriend(cookie.get('auth_token'), friend_id)
      
      if (response === 'success') {
         getAllFriendsFunc()
      }
   }

   return <div className={styles.friend}>
      <div className={styles.item__username}>
            <Image 
               className={styles['item__username-avatar']}
               src={avatar_path}
               width="60"
               height="60"
               alt="avatar"
            />
            <div className={styles['item__username-nick-wrapper']}>
               <h2 className={styles['item__username-nick']}>{nickname}</h2>
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
               <div className={styles['item__menu']}>
                  <button 
                     className={styles['item__menu-btn']}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                     <Image
                        className={styles['item__menu-img']}
                        width="12"
                        height="6"
                        src="/images/icon/arrow-up.svg"
                     />
                  </button>
                  <div className={`${styles['item__menu-body']} ${isMenuOpen ? styles.open : ''}`}>
                     <ul className={styles['item__menu-list']}>
                        <li className={styles['item__menu-item']}>
                           <button 
                              className={styles['item__menu-list-btn']}
                              onClick={deleteFriendHandler}
                           >
                              Delete from friend
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
   </div>
}

export default HeaderSidebarFriendItem
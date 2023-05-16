import Image from 'next/image'
import Link from 'next/link'
import styles from './HeaderSearchResultItem.module.css'

const HeaderSearchResultItem = ({name, avatar, flag, id}) => {
   return <li className={styles['search__result-item']}>
      <Link href="/user/monkey" className={styles['search__result-link']}>
         <div className={styles['search__result-info']}>
            <Image className={styles['search__result-info-avatar']} src="/images/avatar.svg" width="30" height="30" alt='avatar'/>
            <span className={styles['search__result-info-username']}>monkey</span>
         </div>
         <Image className={styles['search__result-flag']} src="/images/flags/sweden.svg" width="28" height="21" alt='flag' />
      </Link>
   </li>
}

export default HeaderSearchResultItem
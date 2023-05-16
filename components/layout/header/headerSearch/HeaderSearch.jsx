import Image from 'next/image'
import styles from './HeaderSearch.module.css'
import HeaderSearchResultItem from './headerSearchResultItem/HeaderSearchResultItem'

const HeaderSearch = ({searchQuery, searchInputHandler, clearSearchQuery}) => {
   return <form className={styles.search}>
      <div className={styles['search__input-wrapper']}>
         <input 
            value={searchQuery}
            onInput={searchInputHandler} 
            placeholder='Search for friends or teams...' 
            type="text" 
            className={styles.search__input} 
         />
         <button 
            type='button' 
            className={`${styles.search__clear} 
            ${searchQuery.trim().length ? styles.show : ''}`}
            onClick={clearSearchQuery}
         >
            <Image src="/images/icon/close.svg" width="15" height="15" alt="clear" />
         </button>
      </div>
      <button className={styles.search__button} type='button' >
         <Image src="/images/icon/search.svg" width="16" height="16" alt='search' />
      </button>
      <ul className={`${styles.search__result} ${searchQuery ? styles.show : ''}`}>
         <HeaderSearchResultItem />
         <HeaderSearchResultItem />
         <HeaderSearchResultItem />
      </ul>
   </form>
}

export default HeaderSearch
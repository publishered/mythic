import Image from 'next/image'
import { useState } from 'react'
import Container from '../UI/container/Container'
import styles from './PlayersListPage.module.css'
import PlayersListPageTable from './playersListPageTable/PlayersListPageTable'

const PlayersListPage = () => {

   const [chosenMode, setChosenMode] = useState('5v5')

   return <section className={styles.players}>
      <Container>
         <div className={styles.players__top}>
            <h1 className={styles.players__title}>
               Players
            </h1>
            <div className={styles['players__top-right']}>
               <form action="#" className={styles['players__top-search']}>
                  <input type="text" className={styles['players__top-search-input']} placeholder='Search for friends or people...' />
                  <button type="submit" className={styles['players__top-search-submit']}>
                     <Image 
                        src="/images/icon/search.svg"
                        width="14"
                        height="14"
                        alt='search icon'
                     />
                  </button>
               </form>
               <div className={styles['players__top-mode']}>
                  <PlayersListPageModeBtn mode={'1v1'} chosenMode={chosenMode} setChosenMode={setChosenMode}/>
                  <PlayersListPageModeBtn mode={'2v2'} chosenMode={chosenMode} setChosenMode={setChosenMode}/>
                  <PlayersListPageModeBtn mode={'5v5'} chosenMode={chosenMode} setChosenMode={setChosenMode} />
               </div>
            </div>
         </div>
         <PlayersListPageTable />
      </Container>
   </section>
}

const PlayersListPageModeBtn = ({mode, chosenMode, setChosenMode}) => {
   return <button
      onClick={() => setChosenMode(mode)} 
      className={`${styles['players__top-mode-button']} 
      ${chosenMode === mode ? styles.active : ''}`}
      >
         {mode}
   </button>
}

export default PlayersListPage
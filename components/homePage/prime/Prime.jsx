import Container from '@/components/UI/container/Container'
import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import ModalFunction from '@/context/ModalFunction'
import { useContext } from 'react'
import styles from './Prime.module.css'

const Prime = () => {
   const ModalFunctionContext = useContext(ModalFunction)
   console.log(ModalFunctionContext)

   return <section className={styles.prime}>
      <Container>
         <div className={styles.prime__banner}>
            <div className={styles['prime__banner-info']}>
               <h3 className={styles['prime__banner-title']}>Upgrade to Prime. Compete on a new level.</h3>
               <p className={styles['prime__banner-text']}>Plans start at only €4.49/month. Cancel anytime.</p>
               <DefaultButton 
                  className={styles['prime__banner-btn']}
                  onClick={() => ModalFunctionContext.setIsPrimeOpen(true)}
               >
                  Upgrade
               </DefaultButton>
            </div>
         </div>
         <div className={styles.prime__rectangle}></div>
      </Container>
   </section>
}

export default Prime
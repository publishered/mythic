import Container from '@/components/UI/container/Container'
import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import ModalFunction from '@/context/ModalFunction'
import { useContext } from 'react'
import styles from './ReadyTry.module.css'

const ReadyTry = () => {

   const ModalFunctionContext = useContext(ModalFunction)

   return <section className={styles.ready}>
      <Container>
         <div className={styles.ready__info}>
            <h2 className={styles['ready__info-title']}>TO TRY MYTHIC ESPORTS?</h2>
            <p className={styles['ready__info-text']}>Compete with over 50.000 players now!</p>
            <DefaultButton 
               className={styles['ready__info-button']}
               onClick={() => ModalFunctionContext.setIsSignUpOpen(true)}
            >
               Create account
            </DefaultButton>
         </div>
      </Container>
   </section>
}

export default ReadyTry
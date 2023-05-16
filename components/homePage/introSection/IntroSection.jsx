import Container from '@/components/UI/container/Container'
import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import ModalFunction from '@/context/ModalFunction'
import { useContext } from 'react'
import styles from './IntroSection.module.css'

const IntroSection = () => {
   const ModalFunctionContext = useContext(ModalFunction)
   return <section className={styles.intro}>
      <Container>
         <div className={styles.intro__inner}>
            <span className={styles.intro__label}>Beta</span>
            <h1 className={styles.intro__title}>Play. Become Pro. Get prizes.</h1>
            <p className={styles.intro__text}>
               Mythic Esports has everything for everyone to compete 
               in a competitive environment in their favorite games.
            </p>
         </div>
         <DefaultButton 
            onClick={() => ModalFunctionContext.setIsSignUpOpen(true)}
            className={styles.intro__button}
         >
            Play now
         </DefaultButton>
      </Container>
   </section>
}

export default IntroSection
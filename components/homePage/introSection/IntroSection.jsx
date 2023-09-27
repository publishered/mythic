import Container from '@/components/UI/container/Container'
import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import AuthContext from '@/context/AuthContext'
import ModalFunction from '@/context/ModalFunction'
import { useRouter } from 'next/router'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from './IntroSection.module.css'
import IntroSectionVideo from './introSectionVideo/IntroSectionVideo'

const IntroSection = () => {
   
   const ModalFunctionContext = useContext(ModalFunction)
   const authContext = useContext(AuthContext)

   const [topOffset, setTopOffset] = useState(0)
   const introRef = useRef()
   const {push} = useRouter()

   useEffect(() => {
      setTopOffset(introRef?.current?.getBoundingClientRect().top)
   }, [introRef?.current])

   return <section ref={introRef} className={styles.intro} style={{"--top-offset": `${topOffset}px`}}>
      <IntroSectionVideo />
      <Container>
         <div className={styles.intro__inner}>
            <span className={styles.intro__label}>Beta</span>
            <h1 className={styles.intro__title}>Play. Become Pro. Get prizes.</h1>
            <p className={styles.intro__text}>
               Mythic Play has everything for everyone to compete 
               in a competitive environment in their favorite games.
            </p>
         </div>
         <DefaultButton 
            onClick={() => {
               authContext.isLogin ? push('/profile') : ModalFunctionContext.setIsSignUpOpen(true)
            }}
            className={styles.intro__button}
         >
            Play now
         </DefaultButton>
      </Container>
   </section>
}

export default IntroSection
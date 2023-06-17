import Container from '@/components/UI/container/Container'
import Image from 'next/image'
import styles from './ConnectError.module.css'

const ConnectError = () => {
   return <section className={styles.error}>
      <div className={styles.error__images}>
         <Image src="/images/info-page-bg.svg" width="3036" height="600" alt='' className={styles.error__background} />
         <Image src="/images/connect-error.svg" width="100" height="161" alt=''className={styles.error__img} />
      </div>
      <Container>
         <div className={styles.error__info}>
            <h1 className={styles.error__title}>Error!</h1>
            <p className={styles.error__text}>You cannot link your Steam account because you do not have mobile Steam Guard enabled. It is important that it be mobile, not through email. This is done for your own safety, as we have a guarantee that your account will not be played by a cheater or you will not be hacked. To install Steam Guard, use the official Steam instructions below.</p>
            <a target='_blank' href="https://help.steampowered.com/en/faqs/view/6891-E071-C9D9-0134" className={styles.error__link}>
               https://help.steampowered.com/en/faqs/view/6891-E071-C9D9-0134
            </a>
         </div>
      </Container>
   </section>
}

export default ConnectError
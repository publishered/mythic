import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './Modal.module.css'

const Modal = ({isModalOpen, children, setIsModalOpen, timeout = 500}) => {
   if (typeof window === "object") {
      // if (isModalOpen) {
      //    document.body.classList.add('popup-open')
      // } else {
      //    if (document.body.classList.contains('popup-open')) {
      //       document.body.classList.remove('popup-open')
      //    }
      // }
      
      return (
         createPortal(
            <CSSTransition
               in={isModalOpen}
               timeout={timeout}
               unmountOnExit
               mountOnEnter
               classNames='modal__animation'
            >
               <div className={styles.modal__wrapper} onClick={() => {}}>
                  <div className={styles.modal} onClick={e => {}}>
                     {children}
                  </div>
               </div>
            </CSSTransition>,
            document.querySelector('#modal')
         )
      )
   }
}

export default Modal
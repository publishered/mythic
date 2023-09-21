import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './SettingsPagesSettingItem.module.css'

const SettingsPagesSettingItem = ({title, prime = false, placeholder, type = 'default', preplaceholder, checkDefault = false, onChange}) => {

   const inputWidthRef = useRef()

   const [inputWidth, setInputWidth] = useState(0)
   const [inputValue, setInputValue] = useState('')
   const [isChecked, setIsChecked] = useState(checkDefault)

   const initInputWidth = () => inputWidthRef?.current?.offsetWidth ? setInputWidth(inputWidthRef.current.offsetWidth + 3) : ''

   console.log(inputWidthRef?.current?.offsetWidth )

   useEffect(() => {
      initInputWidth()
   }, [inputWidthRef, placeholder])

   const onInputHandler = e => setInputValue(e.target.value)
   const onInputBlur = e => initInputWidth()

   let lockedPlaceholder
   
   if (type === 'locked') {
      if (placeholder === 'background') {
         lockedPlaceholder = <div className={styles['item__background-type']}></div>
      } else if (placeholder === 'status') {
         lockedPlaceholder = <Image 
            className={styles['item__status-img']}
            src="/images/icon/status.svg"
            width="24"
            height="24"
            alt='change status'
         />
      } else if (placeholder) {
         lockedPlaceholder = <span className={styles['item__locked-placeholder']}>{placeholder}</span>
      }
   }

   return <div className={styles.item}>
      <div className={styles['item__title-wrapper']}>
         <h3 className={styles.item__title}>{title}</h3>
         {prime ?
            <span className={styles['item__title-prime']}>
               <Image 
                  className={styles['item__title-prime-icon']}
                  src="/images/icon/prime.svg"
                  width="15"
                  height="15"
                  alt='premium only'
               />
               Premium
            </span>
         : ''}
      </div>
      <div className={styles['item__value']}>
         {type === 'default' ?
         <form className={styles['item__value-form']}>
            <span ref={inputWidthRef} className={styles['item__value-form-hide-width']}>{inputValue ? inputValue : placeholder}</span>
            <label className={styles['item__value-form-label']}>
               <div className={styles['item__value-form-input-wrapper']}>
                  {preplaceholder ? <span className={styles['item__value-form-pre-placeholder']}>{preplaceholder}</span> : ''}
                  <input 
                     // onBlur={onInputBlur}
                     onInput={onInputHandler}
                     type="text" 
                     style={{width: `${inputWidth}px`}} 
                     placeholder={placeholder} 
                     className={styles['item__value-input']} 
                  />
               </div>
               <Image 
                  className={styles['item__value-icon']} 
                  src="/images/icon/pencil.svg"
                  width="12"
                  height="12"
                  alt="edit"
               />
            </label>
         </form>
         : ''}
         {type === 'file' ? 
            <label className={styles['item__file-label']}>
               Select file
               <input type="file" hidden onChange={onChange} accept="image/png, image/webp, image/jpeg" />
            </label>
         : ''}
         {type === 'locked' ?
            <div className={styles.locked}>
            {lockedPlaceholder}
            <Image 
               src="/images/icon/locked.svg"
               width="10"
               height="13"
               alt='locked'
            />
            </div>
         : ''}
         {type === 'checkbox' ? 
            <button className={`${styles.item__checkbox} ${isChecked ? styles.checked : ''}`} onClick={() => setIsChecked(prevState => !prevState)}>
               <span className={styles['item__checkbox-circle']}></span>
            </button>
         : ''}
      </div>
   </div>
}

export default SettingsPagesSettingItem
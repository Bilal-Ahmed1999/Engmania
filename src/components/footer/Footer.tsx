import Image from 'next/image'
import React from 'react'
import style from './style.module.css'


const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.item}>© Copyright 2023 Engmania</div>
        <div className={style.social}>
            <Image src="/1.png" className={style.icon} width={15} height={15} alt='facebook' />
            <Image src="/3.png" className={style.icon} width={15} height={15} alt='linkedin' />
            <Image src="/2.png" className={style.icon} width={15} height={15} alt='instagram' />
            <Image src="/4.png" className={style.icon} width={15} height={15} alt='youtube' />
        </div>
    </div>
  )
}

export default Footer
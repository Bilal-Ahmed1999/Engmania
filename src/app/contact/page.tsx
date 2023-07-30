import React from 'react'
import type { Metadata } from "next";
import styles from './page.module.css'
import Image from 'next/image'
import CustomButton from '@/components/button/CutstomButton'

export const metadata: Metadata = {
  title: "Contact",
  description: "Learn English through this app",
};



const Contact = () => {
  const cols = 30;
  const rows = 10
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={cols}
            rows={rows}
          ></textarea>
          <CustomButton url="#" title="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
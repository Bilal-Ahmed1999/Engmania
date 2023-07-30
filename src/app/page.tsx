import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../../public/hero.png'
import CustomButton from '@/components/button/CutstomButton'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
        <CustomButton
            url="/contact"
            title='See Our Works'
           
          />
      </div>
      <div className={styles.item}>
        <Image  src={Hero} alt='homeimg' className={styles.imgContainer}  />

      </div>
    </div>
  )
}

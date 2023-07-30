'use client'

import { CustomButtonProps } from '@/types';
import styles from './button.module.css'
import Link from 'next/link';

type LinkProps = {
  url: string;
}

//to make this button we need to pass props data from where calling it
const CustomButton = ({title, url }: CustomButtonProps & LinkProps) => {
  return ( 
    <Link href={url}>
    <button 
    className={styles.btn}
    >
   {title}
    </button>
    </Link>
  )
}

export default CustomButton
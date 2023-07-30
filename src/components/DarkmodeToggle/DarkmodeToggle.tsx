"use client"

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { useTheme } from 'next-themes'


const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  // const {toggle, mode} = useContext(ThemeContext);
  return (
    <div className={styles.container}  onClick={() => setTheme(theme === 'dark' ? 'light':'dark')}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
    
  );
};

export default DarkModeToggle;
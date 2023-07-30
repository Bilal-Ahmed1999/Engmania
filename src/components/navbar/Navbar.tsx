"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkmodeToggle/DarkmodeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  const handleSignOut = () => {
    signOut(); // Call the signOut function here
  };
  return (

    <>
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Engmania
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((item) => (
          <Link href={item.url} key={item.id} className={styles.link}>
            {item.title}
          </Link>
        ))}
        {
          session.status === "authenticated" && (

        <button
          className={styles.logout}
          onClick={handleSignOut}
        >
          Logout
        </button>
          )
        }
      </div>
    </div>
    
    </>
  );
};

export default Navbar;

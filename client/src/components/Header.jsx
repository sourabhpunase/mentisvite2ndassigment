import React from 'react'

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './header.module.css'
import logoImg from "./icons/logo.png"
import homeImg from './icons/home.png'
import create from './icons/create.png'
import signinImg from './icons/signin.png'

export default function Header() {
 const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className={styles.nav}>
    <NavLink to="/" className={styles.logo}>
        <img src={logoImg} alt="logo" />
        <h4>MANTIS</h4>
    </NavLink>
<div className={styles.buttons}>

    {currentUser ? (
                    <>
                        <NavLink to='/' className={styles.btn}>
                            <span>
                                <img
                                src={homeImg}
                                alt="home"
                                className={styles.img}
                                />
                            </span>
                            <span className={styles.text}>Home</span>
                        </NavLink>
                       
                        <NavLink to='/create' className={styles.btn}>
                            <span>
                                <img
                                src={create}
                                alt="create"
                                className={styles.img}
                                />
                            </span>
                            <span className={styles.text}>Create</span>
                        </NavLink>
                        <NavLink  to='/profile' className={styles.btn}>
                                <span>
                                    <img
                                    src={currentUser.avatar}
                                    alt="profile"
                                    className={styles.profileimg}
                                    />
                                </span>
                                
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to='/' className={styles.btn}>
                            <span>
                                <img
                                src={homeImg}
                                alt="home"
                                className={styles.img}
                                />
                            </span>
                            <span className={styles.text}>Home</span>
                        </NavLink>
                        <NavLink to='/sign-in' className={styles.btn}>
                            <span>
                                <img
                                src={signinImg}
                                alt="sign-in"
                                className={styles.img}
                                />
                            </span>
                            <span className={styles.text}>LogIn</span>
                        </NavLink>
                    </>
                )}
                </div>
    </nav>
  )
}



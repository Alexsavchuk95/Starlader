import React from 'react';
import logoB from '../../assets/img/logoB.png';
import styles from './frame.module.css';
import arrow from '../../assets/icons/arrow.png';
import tickets from '../../assets/icons/tickets.png';
import twitter from '../../assets/icons/twitter.png';
import twitch from '../../assets/icons/twitch.png';
import facebook from '../../assets/icons/Facebook.png';
import vkontakte from '../../assets/icons/Vkontakte.png';

const Frame = () => (
    <section className={styles.frame}>
        <div className={styles.frame__wrapper}>
            <div className={styles.frame__star}>
                <div className={styles.frame__title}>
                    <img src={logoB} alt="logoB" className={styles.frame__logoB} />
                    <h2>StarSeries i-League CSGO Season 8</h2>
                </div>
                <div className={styles.frame__container}>
                    <div className={styles.cnt}>
                        <div className={styles.frame__cnt}>
                            <p className={styles.frame__text}>Parimatch League CS:GO is the new online league in Counter-Strike: Global Offensive from Parimatch and StarLadder, with $100,000 total prize pool. 16 teams from Europe and the CIS will take part in the League, with 4 teams going to League through open qualifiers.</p>
                        </div>
                        <div className={styles.frame_buttons}>
                            <button className={`${styles.frame__btn} ${styles.frame__btn__media}`}>
                                <p className={styles.btn__text}>Read Announcement</p>
                                <img src={arrow} alt="arrow" />
                            </button>
                            <button className={styles.frame__btn}>
                                <p className={styles.btn__text}>Get Tickets</p>
                                <img src={tickets} alt="tickets" className={styles.btn__ic} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.cnt2}>
                        <div className={styles.cnt__info}>
                            <div className={styles.cnt2__info}>
                                <p className={styles.cnt2__text}>Место:</p>
                                <p className={styles.cnt2__text_info}>Берлин, Германия</p>
                            </div>
                            <div className={styles.cnt2__info}>
                                <p className={styles.cnt2__text}>Даты:</p>
                                <p className={styles.cnt2__text_info}>22 Сентября – 30 Октября 2020</p>
                            </div>
                            <div className={styles.cnt2__info}>
                                <p className={styles.cnt2__text}>Призы:</p>
                                <p className={styles.cnt2__text_info}>$1,000,000</p>
                            </div>
                        </div>
                        <div className={styles.cnt__social}>
                            <a href="/"><img src={twitter} alt="twitter"/></a>
                            <a href="/"><img src={twitch} alt="twitch"/></a>
                            <a href="/"><img src={facebook} alt="facebook"/></a>
                            <a href="/"><img src={vkontakte} alt="vkontakte"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


export default Frame;
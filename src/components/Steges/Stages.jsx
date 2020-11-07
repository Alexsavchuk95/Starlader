import React from 'react';
import styles from './stages.module.css';
import ua from '../../assets/icons/ua.png';
import cup from '../../assets/icons/cup.png';
import sheald from '../../assets/icons/sheald.png';
import time from '../../assets/icons/time.png';
import vector from '../../assets/icons/Vector.png'
import arrowRed from '../../assets/icons/arrowRed.png';

const Stages = ({ items }) => (
    <section className={styles.stages}>
        <h3 className={styles.stages__title}>Этапы проведения</h3>
        <p className={styles.stages__text}>The path to every Major begins with the open qualifiers for the regional Minor Championships, spanning Europe, CIS, Americas, and Asia. <span className={styles.stages__title_red}>Here is</span> the schedule of every qualifying stage of StarLadder Major.</p>
        <h5 className={styles.stages__titleRegis}>Зарегистрировано: 24</h5>
        <div className={styles.stages__com}>
            <span className={styles.stages__comTitle}>#</span>
            <span className={styles.stages__comTitle}>Команда</span>
        </div>
        <div className={styles.stages__container}>
            <div className={styles.stages__teams}>
                <ul className={styles.stages__list}>
                    {items.map((item, index) => {
                        return (
                            <li key={index} className={styles.stages__item}>
                                <a className={styles.stages__link} href="/">
                                    <span className={styles.stages__number}>{item.number}</span>
                                    <div className={styles.stages__command}>
                                        <img className={styles.item__flag} src={ua} alt="" />
                                        <p className={styles.item__text}>{item.team}</p>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.stages__regist}>
                <div className={styles.regist__cnt}>
                    <span className={styles.test}></span>
                    <div className={styles.regist__circle}>
                        <div className={styles.regist__cup}>
                            <img className={styles.regist__img} src={cup} alt="" />
                        </div>
                    </div>
                    <div className={styles.regist__titleCnt}>
                        <p className={styles.regist__title}>Registration</p>
                        <p className={styles.regist__time}>29 sep, 19:00 – 20 nov, 10:00</p>
                    </div>
                </div>
                <div className={styles.regist__cnt}>
                    <div className={`${styles.regist__circle} ${styles.regist__circle_nA}`}>
                        <div className={styles.regist__cup_nA}>
                            <img className={`${styles.regist__img} ${styles.regist__img_nA}`} src={sheald} alt="" />
                        </div>
                    </div>
                    <div className={styles.regist__titleCnt}>
                        <p className={`${styles.regist__title} ${styles.regist__title_nA}`}>Check-in</p>
                        <p className={`${styles.regist__time} ${styles.regist__time_nA}`}>29 sep, 19:00 – 20 nov, 10:00</p>
                    </div>
                </div>
                <div className={styles.regist__cnt}>
                    <div className={`${styles.regist__circle} ${styles.regist__circle_nA}`}>
                        <div className={styles.regist__cup_nA}>
                            <img className={`${styles.regist__img} ${styles.regist__img_nA}`} src={time} alt="" />
                        </div>
                    </div>
                    <div className={styles.regist__titleCnt}>
                        <p className={`${styles.regist__title} ${styles.regist__title_nA}`}>Scheduling:</p>
                        <p className={`${styles.regist__time} ${styles.regist__time_nA}`}>29 sep, 19:00 – 20 nov, 10:00</p>
                    </div>
                </div>
                <div className={styles.stages__registed}>
                    <div className={styles.registed__circle}>
                        <img className={styles.registed__img} src={vector} alt="" />
                    </div>
                    <div>
                        <p className={styles.registed__text}>Вы зарегистрированы</p>
                        <p className={styles.registed__info}>Team: Natus vincere (#353)</p>
                    </div>
                </div>
                <ul className={styles.information__list}>
                    <li className={styles.information__item}>
                        <a className={styles.information__link} href="/">
                            <p className={styles.information__text}>Support</p>
                            <img className={styles.information__arr} src={arrowRed} alt="" />
                        </a>
                    </li>
                    <li className={styles.information__item}>
                        <a className={styles.information__link} href="/">
                            <p className={styles.information__text}>Rules</p>
                            <img className={styles.information__arr} src={arrowRed} alt="" />
                        </a>
                    </li>
                    <li className={styles.information__item}>
                        <a className={styles.information__link} href="/">
                            <p className={styles.information__text}>FAQ</p>
                            <img className={styles.information__arr} src={arrowRed} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);


export default Stages;
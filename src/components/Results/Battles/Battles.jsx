import React from 'react';
import styles from '../results.module.css'


const Battles = ({ battle }) => (
    <ul className={styles.matches__list}>
        {battle.map((item, index) => {
            return (
                <li key={index} className={styles.matches__item}>
                    <p className={styles.matches__text}>Group Stage</p>
                    <div className={styles.matches__live}>
                        <a href="/"><img className={styles.matches__play} src={item.play} alt="" /></a>
                        <span className={styles.matches__time}>{item.live}</span>
                        <span className={styles.matches__dateTime}>{item.time}</span>
                        <span className={styles.matches__date}>{item.date}</span>
                    </div>
                    <div className={styles.battle__P}>
                        <img src={item.P} alt="" />
                    </div>
                    <div className={styles.matches__bets}>
                        <p className={styles.matches__teamName}>{item.groupA}</p>
                    </div>
                    <div className={styles.matches__bets}>
                        <p className={styles.matches__teamName}>{item.groupB}</p>
                    </div>
                    <span className={styles.battle__map}>{item.map}</span>
                    <div className={styles.battle__match}>
                        <p className={styles.battle_matchText}>{item.match}</p>
                    </div>
                    <div className={styles.star}>
                        <img className={styles.matches_star} src={item.starActive} alt="" />
                        <img  className={styles.matches_star} src={item.star} alt="" />
                    </div>
                </li>
            );
        })}
    </ul>
);

export default Battles;
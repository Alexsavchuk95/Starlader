import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Battles from './Battles/Battles.jsx';
import data from './Battles/BattleList';
import styles from './results.module.css';
import ggbet from '../../assets/teams/ggbet.png'

const Results = ({ items }) => (
    <section className={styles.results}>
        <h3 className={styles.results__title}>Расписание и результаты</h3>
        <div >
            <Tabs>
                <TabList>
                    <Tab>Matches</Tab>
                    <Tab>Battles</Tab>
                </TabList>
                <TabPanel>
                    <ul className={styles.matches__list}>
                        {items.map((item, index) => {
                            return (
                                <li key={index} className={styles.matches__item}>
                                    <p className={styles.matches__text}>Asia Minor: Play-Off</p>
                                    <div className={styles.matches__live}>
                                        <a href="/"><img className={styles.matches__play} src={item.play} alt="" /></a>
                                        <span className={styles.matches__time}>{item.live}</span>
                                        <span className={styles.matches__dateTime}>{item.time}</span>
                                        <span className={styles.matches__date}>{item.date}</span>
                                    </div>
                                    <div className={styles.matches__teams}>
                                        <img className={styles.matches__teamImg} src={item.teamOne} alt="logoTeam" />
                                        <img className={styles.matches__teamImg} src={item.teamTwo} alt="logoTeam" />
                                    </div>
                                    <div className={styles.matches__bets}>
                                        <p className={styles.matches__teamName}>{item.teamNameOne}</p>
                                        <span className={styles.matches__coefficient}>{item.coeOne}</span>
                                    </div>
                                    <div className={styles.matches__bets}>
                                        <p className={styles.matches__teamName}>{item.teamNameTwo}</p>
                                        <span className={styles.matches__coefficient}>{item.coeTwo}</span>
                                    </div>
                                    <div className={styles.matches__ggbet}>
                                        <span className={styles.matches__bo}>{item.bo}</span>
                                        <img src={ggbet} alt="ggbet" className={styles.ggbet} />
                                    </div>
                                    <div className={styles.star}>
                                        <img className={styles.matches_star} src={item.starActive} alt="" />
                                        <img className={styles.matches_star} src={item.star} alt="" />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </TabPanel>
                <TabPanel>
                    <Battles battle={data} />
                </TabPanel>
            </Tabs>
        </div>
    </section>
);


export default Results;
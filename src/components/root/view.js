import React from 'react';

import ACTIVE_TAB from './model';

import CounterSimple from '../counter-simple';
import CounterMessages from '../counter-messages';
import HackerNewsHeadline from '../hacker-news-headline';
import ManyHackers from '../many-hackers';
import HackersAndCounters from '../hackers-and-counters';
import JustInput from '../just-input';

import styles from './styles.css';

const tabs = {
  SIMPLE_COUNTER: {
    title: 'Simple Counter',
    component: <CounterSimple/>
  },
  MESSAGES_COUNTER: {
    title: 'Counter with messages',
    component: <CounterMessages/>
  },
  ASYNC_WITH_MESSAGES: {
    title: 'async actions with messages example',
    desc: 'Hacker news top story loader',
    component: <HackerNewsHeadline/>
  },
  LIST_OF_HEALDINES: {
    title: 'list of hacker news',
    component: <ManyHackers/>
  },
  HEADLINES_AND_COUNTERS: {
    title: 'Hacker news and Counters',
    component: <HackersAndCounters/>
  },
  JUST_INPUT: {
    title: 'Just Simple Input',
    component: <JustInput/>
  }
};

export default ({ activeTab, switchTab }) =>
  <div>
    <div className={styles.navigation}>
      { Object.keys(tabs).map(tabId =>
        <button
          key={tabId}
          onClick={switchTab(tabId)}
          className={tabId === activeTab ? styles.active : ''}
        >
          {tabs[tabId].title}
        </button>
      ) }
    </div>

    { tabs[activeTab] ?
      <div>
        <h2>{tabs[activeTab].title}</h2>
        { tabs[activeTab].desc && <p>{tabs[activeTab].desc}</p> }
        { tabs[activeTab].component }
      </div> :
      <div>Tab not found</div>
    }
  </div>;

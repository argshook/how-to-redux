import React from 'react';

import CounterSimple from '../counter-simple';
import CounterMessages from '../counter-messages';
import HackerNewsHeadline from '../hacker-news-headline';
import ManyHackers from '../many-hackers';

const Root = () =>
  <div>
    <h2>Simple Counter</h2>
    <CounterSimple/>
    <hr />

    <h2>Counter with messages</h2>
    <CounterMessages/>
    <hr />

    <h2>async actions with messages example</h2>
    <p>Hacker news top story loader</p>
    <HackerNewsHeadline/>
    <hr />

    <h2>list of hacker news</h2>
    <ManyHackers/>
  </div>;

export default Root;

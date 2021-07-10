import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Secure',
    Svg: require('../../static/img/lock.svg').default,
    description: (
      <>
        Our platform is secure and does not collect any data about your profile or the music you play in the queue
      </>
    ),
  },
  {
    title: 'Easy',
    Svg: require('../../static/img/easy.svg').default,
    description: (
      <>
        Our platform has been designed to be easy to use for you or your friends 
      </>
    ),
  },
  {
    title: '"Girl Just Wanna Have Fun" 🎵',
    Svg: require('../../static/img/party.svg').default,
    description: (
      <>
        Push the possibilities of your parties by allowing your guests to discover new music, who knows, it could be your future track of the moment 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

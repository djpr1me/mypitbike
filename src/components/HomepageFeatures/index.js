import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Guides',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore a vast collection of in-depth articles and illustrations covering pit bike maintenance, repairs, model reviews, purchasing advice, performance tuning, legal info, and technical insights, ensuring you can find guidance for any scenario.
      </>
    ),
  },
  {
    title: 'Tech Database',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Access a comprehensive technical reference library filled with essential documentation, including component dimensions, torque settings, fluid capacities, piston ring sizes, and gear ratios—details omitted from extensive <code>Guides</code> but crucial for precision.
      </>
    ),
  },
  {
    title: 'Manuals',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Find a comprehensive collection of PDF documents, including owner and service manuals, wiring diagrams, and parts diagrams, providing all the resources needed for part identification and bike maintenance.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

import Image from 'next/image';
import styles from './work.module.scss';
import { paintings, graphicArt, posters } from '../../lib/resources';
import { v4 as uuidv4 } from 'uuid';

export default function Work({ category }) {
  // check category = which object from resources.js should be rendered
  function chooseWork() {
    switch (category) {
      case 'paintings':
        return paintings;
      case 'graphicArt':
        return graphicArt;
      case 'posters':
        return posters;
      default:
        return paintings;
    }
  }

  const work = chooseWork();

  return (
    <div className={styles.content}>
      {work.map((work) => (
        <div className={styles.container} key={work.id}>
          <h2 className={styles.title}>{work.title}</h2>
          <p className={styles.materials}>{work.materials}</p>
          <p className={styles.size}>{work.size}</p>
          <div className={styles.imageContainer}>
            {work.path.map((path) => (
              <div className={styles.imageWrapper} key={uuidv4()}>
                <Image
                  src={path}
                  alt={`Picture of the "${work.title}" painting`}
                  width={668}
                  height={1000}
                  quality={100}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

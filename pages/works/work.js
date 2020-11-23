import Image from 'next/image';
import styles from './work.module.scss';
import { paintings } from './resources';
import { v4 as uuidv4 } from 'uuid';

export default function Work() {
  return (
    <div className={styles.content}>
      {paintings.map((painting) => (
        <div className={styles.container} key={painting.id}>
          <h2 className={styles.title}>{painting.title}</h2>
          <p className={styles.materials}>{painting.materials}</p>
          <p className={styles.size}>{painting.size}</p>
          {painting.path.map((path) => (
            <div className={styles.imageWrapper} key={uuidv4()}>
              <Image
                src={path}
                alt='Picture of the "Shape 1" painting'
                width={593}
                height={892}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

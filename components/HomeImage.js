import Image from 'next/image';
import styles from './HomeImage.module.scss';

export default function HomeImage() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src='/me.jpg'
        quality={100}
        width={668}
        height={1000}
        layout='responsive'
        alt='Photo of Roksana Machowska'
      />
    </div>
  );
}

import Image from 'next/image';
import styles from './HomeImage.module.scss';

export default function HomeImage() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src='/images/me.jpg'
        width={320}
        height={480}
        layout='responsive'
        priority
      />
    </div>
  );
}

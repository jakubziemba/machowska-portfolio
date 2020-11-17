import Image from 'next/image';
import styles from './HomeImage.module.scss';

export default function HomeImage() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src='/images/me.jpg'
        quality={100}
        width={1333}
        height={2000}
        layout='responsive'
      />
    </div>
  );
}

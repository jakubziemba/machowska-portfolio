import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href='https://instagram.com/roksana_machowska'
        target='_blank'
      >
        <FontAwesomeIcon
          className={styles.icon}
          icon={faInstagram}
          size='2x'
        />
      </a>
      <p className={styles.copy}>
        <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />{' '}
        Roksana Machowska 2020: All rights reserved.
      </p>
    </div>
  );
}

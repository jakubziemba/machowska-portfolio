import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href='https://instagram.com/roksana_machowska'
        target='_blank'
      ></a>
      <p className={styles.copy}>
        <span>&copy;</span> Roksana Machowska 2020: All rights
        reserved.
      </p>
    </div>
  );
}

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copy}>
        <span>&copy;</span> Roksana Machowska 2020: All rights
        reserved.
      </p>
    </div>
  );
}

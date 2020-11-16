import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>About</li>
        <li>Works</li>
        <li>Exhibitions</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

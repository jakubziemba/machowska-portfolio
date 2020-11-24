import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

export default function Header({ title }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} onClick={handleClick} />
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

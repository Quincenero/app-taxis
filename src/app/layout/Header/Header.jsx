import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        🚕 Taxi Control Pro
      </div>

      <div className={styles.info}>
        Gestión diaria
      </div>
    </header>
  );
}

export default Header;
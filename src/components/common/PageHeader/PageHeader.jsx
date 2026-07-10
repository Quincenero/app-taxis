import styles from "./PageHeader.module.css";

function PageHeader({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>

      {subtitle && (
        <p>{subtitle}</p>
      )}
    </header>
  );
}

export default PageHeader;
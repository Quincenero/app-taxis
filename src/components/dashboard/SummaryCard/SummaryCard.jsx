import styles from "./SummaryCard.module.css";

function SummaryCard({ title, value, icon: Icon, color }) {
  return (
    <article className={styles.card}>
      <div
        className={styles.icon}
        style={{ color }}
      >
        <Icon size={28} />
      </div>

      <div className={styles.info}>
        <span className={styles.title}>
          {title}
        </span>

        <strong className={styles.value}>
          {value}
        </strong>
      </div>
    </article>
  );
}

export default SummaryCard;
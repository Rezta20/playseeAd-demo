import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.cardWrapperBottom}>
      <div className={styles.cardWrapperRelative}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}> {props.description}</div>
        <div className={styles.btnWrapper}>
          <button className={styles.function}>{props.settingButton}</button>
          <button className={styles.later}>{props.later || "稍後再說"}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

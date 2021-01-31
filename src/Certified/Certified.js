import styles from "./Certified.module.scss";
import React from "react";

function Certified() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="certifiedTitleWrapper">
      <div
        className={styles.titleWrapper}
        onClick={() => {
          if (show === false) {
            setShow(true);
          } else if (show === true) {
            setShow(false);
          }
        }}
      >
        <div className="title">快去認證</div>
        <i className="fas fa-check-circle"></i>
        <i className="fas fa-chevron-down"></i>
      </div>

      <div
        className={
          show
            ? `${styles.descriptionWrapper} ${styles.descriptionWrapperOpend} `
            : `${styles.descriptionWrapper}`
        }
      >
        <p className={styles.description}>
          設定您的個人頁面，解鎖功能及獲得認證標誌
        </p>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <p className={styles.dash}>-</p>
            <p className={styles.detail}>設定帳戶資訊</p>
          </div>
          <div className={styles.content}>
            <p className={styles.dash}>-</p>
            <p className={styles.detail}>設定個人頁面</p>
          </div>
          <div className={styles.content}>
            <p className={styles.dash}>-</p>
            <p className={styles.detail}>認證電子信箱</p>
          </div>
          <div className={`${styles.content} ${styles.settingTimeZone}`}>
            <i class="fas fa-check"></i>
            <p className={styles.detail}>設定時區</p>
          </div>
          <div className={styles.content}>
            <p className={styles.dash}>-</p>
            <p className={styles.detail}>發佈影片</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certified;

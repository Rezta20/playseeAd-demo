import styles from "./BulidAdvertisement.module.scss";
import rec from "../img/rec.png";
import location from "../img/location.png";

function BulidAdvertisement() {
  return (
    <div className="outsideWrapper">
      <div className={styles.title}>建立廣告</div>
      <div className={styles.contentOutsideWrapper}>
        <div className={`${styles.element} ${styles.brandComponent}`}>
          <img src={rec} alt="brand" className={styles.icon} />

          <div
            className={`${styles.contentWrapper} ${styles.brandContentCorrect}`}
          >
            <div className={styles.contentTitle}>品牌知名度</div>
            <div className={styles.contentDescription}>
              我沒有一個實體商家地點，但想於影片切換時置入廣告，推廣我的品牌或個人頁面。
            </div>
          </div>

          <i className={`fas fa-chevron-right ${styles.arrowAlign}`}></i>
        </div>

        <div className={`${styles.element} ${styles.locationComponent}`}>
          <img src={location} alt="location" className={styles.icon} />

          <div className={styles.contentWrapper}>
            <div className={styles.contentTitle}>推廣商家地點</div>
            <div className={styles.contentDescription}>
              我有實體地點，我想要在地圖上推廣我的品牌及產品。
            </div>
          </div>

          <i className={`fas fa-chevron-right ${styles.arrowAlign}`}></i>
        </div>
      </div>
    </div>
  );
}

export default BulidAdvertisement;

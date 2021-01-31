import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footerOutsideWrapper}>
      <div className={styles.textWrapper}>
        <div className={`${styles.text} ${styles.title}`}>
          <div className="playsee">Playsee</div>
          <div className="about">關於</div>
          <div className="opportunity">工作機會</div>
          <div className="question">常見問題</div>
        </div>

        <div className={`${styles.text} ${styles.content}`}>
          <div className="playsee">Playsee規則</div>
          <div className="about">服務條款</div>
          <div className="opportunity">附加服務條款（商家）</div>
          <div className="question">隱私權聲明</div>
        </div>
      </div>

      <div className={styles.iconWrapper}>
        <div className="iconLeftWrapper">
          <select name="" id="" className={styles.selector}>
            <option value="">繁體中文 - zhTW</option>
            <option value="">日本語 - JA </option>
            <option value="">English - EN </option>
          </select>
          <div className={styles.appGoogleWrapper}>
            <div className={styles.appWrapper}>
              <i class="fab fa-apple"></i>
              <div className={styles.iconTextWrapper}>
                <div className={styles.iconTextTitle}>Download on the</div>
                <div className={styles.iconTextContent}>App Store</div>
              </div>
            </div>
            <div className={styles.googleWrapper}>
              <i class="fab fa-google-play"></i>
              <div className={styles.iconTextWrapper}>
                <div className={styles.iconTextTitle}>GET IT ON</div>
                <div className={styles.iconTextContent}>Google Play</div>
              </div>
            </div>
          </div>
          <div className={styles.socialIconWrapper}>
            <div className={styles.socialBackground}>
              <i class="fab fa-twitter"></i>
            </div>
            <div className={styles.socialBackground}>
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className={styles.socialBackground}>
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div className={styles.socialBackground}>
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className={styles.iconRightWrapper}>
          <div className="copyright">©2021 playsee</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

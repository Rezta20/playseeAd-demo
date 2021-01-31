import styles from "./User.module.scss";
import React from "react";

function User() {
  const [current, setCurrent] = React.useState("");
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileLogoWrapper}>
        <i className="fas fa-user-circle profile"></i>
      </div>

      <div className={styles.profileContentWrapper}>
        <div className={styles.id}>Sasha.0127</div>
        <div className={styles.btnWrapper}>
          <button
            className={
              current === "個人頁面成效分析" ? `${styles.btnWrapperBorder}` : ""
            }
            onClick={() => {
              setCurrent("個人頁面成效分析");
            }}
          >
            個人頁面成效分析
          </button>
          <button
            className={
              current === "編輯個人頁面" ? `${styles.btnWrapperBorder}` : ""
            }
            onClick={() => {
              setCurrent("編輯個人頁面");
            }}
          >
            編輯個人頁面
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;

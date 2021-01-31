import icon from "../img/icon.png";
import styles from "./Header.module.scss";
import React from "react";

function Header() {
  const [currentPage, setCurrentPage] = React.useState("主頁");

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={icon} alt="logo" />
          <h3 className={styles.logoText}>Playsee Ads</h3>
        </div>

        <nav className={styles.titleWrapper}>
          <div
            className={`${styles.titleContent} ${
              currentPage === "主頁" ? styles.titleContentBorder : ""
            }`}
            onClick={() => {
              setCurrentPage("主頁");
            }}
          >
            主頁
          </div>
          <div
            className={`${styles.titleContent} ${
              currentPage === "建立廣告" ? styles.titleContentBorder : ""
            }`}
            onClick={() => {
              setCurrentPage("建立廣告");
            }}
          >
            建立廣告
          </div>
          <div
            className={`${styles.titleContent} ${
              currentPage === "管理" ? styles.titleContentBorder : ""
            }`}
            onClick={() => {
              setCurrentPage("管理");
            }}
          >
            管理
          </div>
        </nav>
      </div>
      <i className="fas fa-user-circle"></i>
    </header>
  );
}

export default Header;

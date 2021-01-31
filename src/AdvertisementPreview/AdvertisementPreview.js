import styles from "./AdvertisementPreview.module.scss";
import React from "react";

function AdvertisementPreview() {
  const [showDate, setShowDate] = React.useState("昨日");
  let content;
  if (showDate === "昨日") {
    content = (
      <div className={`${styles.content} ${styles.yesterdayContent}`}>
        2021年1月31日
      </div>
    );
  } else if (showDate === "7日") {
    content = (
      <div className={`${styles.content} ${styles.sevenDayContent}`}>
        2021年1月25日 - 2021年1月31日
      </div>
    );
  } else if (showDate === "30日") {
    content = (
      <div className={`${styles.content} ${styles.thirtyDayContent}`}>
        2021年1月01日 - 2021年1月31日
      </div>
    );
  }

  return (
    <div className="advertisementWrapper">
      <div className={styles.title}>廣告總覽</div>
      <div className={styles.timeWrapper}>
        <div
          className={`${styles.titleComponent} ${
            showDate === "昨日" ? styles.titleComponentCurrent : ""
          } ${styles.yesterday} `}
          style={{
            color: showDate === "昨日" ? "#33a0a6" : "rgba(49, 65, 70, 0.5)",
          }}
          onClick={() => {
            setShowDate("昨日");
          }}
        >
          昨日
        </div>
        <div
          className={`${styles.titleComponent} ${
            showDate === "7日" ? styles.titleComponentCurrent : ""
          } ${styles.sevenDay} `}
          style={{
            color: showDate === "7日" ? "#33a0a6" : "rgba(49, 65, 70, 0.5)",
          }}
          onClick={() => {
            setShowDate("7日");
          }}
        >
          7日
        </div>
        <div
          className={`${styles.titleComponent} ${
            showDate === "30日" ? styles.titleComponentCurrent : ""
          } ${styles.thirtyDay} `}
          style={{
            color: showDate === "30日" ? "#33a0a6" : "rgba(49, 65, 70, 0.5)",
          }}
          onClick={() => {
            setShowDate("30日");
          }}
        >
          30日
        </div>
      </div>
      {content}
      <div className={styles.information}>無相關資料</div>
    </div>
  );
}

export default AdvertisementPreview;

import Card from "../Card/Card";
import styles from "./CardsWrapper.module.scss";

function CardsWrapper() {
  const cardsData = [
    {
      title: "設定帳戶資訊",
      description: (
        <div className="description">填入您的品牌資訊，解鎖獨享功能。</div>
      ),
      settingButton: "設定帳戶資訊",
    },
    {
      title: "設定個人頁面",
      description: (
        <div className="description">
          新增大頭照及簡介，讓顧客更了解您的品牌。
        </div>
      ),
      settingButton: "設定",
    },
    {
      title: "認證您的電子信箱",
      description: (
        <input
          placeholder={"填入電子信箱"}
          value="mariafu0801@gmail.com"
          className={styles.emailInput}
        />
      ),
      settingButton: "重新寄送認證信",
    },
    {
      title: "發佈影片",
      description: (
        <div className="description">分享您的第一個影片，增加粉絲人數吧！</div>
      ),
      settingButton: "分享影片",
    },
    {
      title: "認證您的商家",
      description: (
        <div className="description">
          認證您的商家地點，讓顧客輕鬆在地圖上找到您。
        </div>
      ),
      settingButton: "開始認證地點",
      later: "不了，謝謝",
    },
  ];

  const cardComponents = cardsData.map((cardData) => {
    return (
      <Card
        title={cardData.title}
        description={cardData.description}
        settingButton={cardData.settingButton}
        later={cardData.later}
      />
    );
  });

  return <div className={styles.cardsWrapper}>{cardComponents}</div>;
}

export default CardsWrapper;

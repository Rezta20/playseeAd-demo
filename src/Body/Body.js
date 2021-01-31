import styles from "./Body.module.scss";

import User from "../User/User";
import Certified from "../Certified/Certified";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import BulidAdvertisement from "../BulidAdvertisement/BulidAdvertisement";
import AdvertisementPreview from "../AdvertisementPreview/AdvertisementPreview";

function Body() {
  return (
    <div className={styles.Body}>
      <User />
      <Certified />
      <CardsWrapper />
      <BulidAdvertisement />
      <AdvertisementPreview />
    </div>
  );
}

export default Body;

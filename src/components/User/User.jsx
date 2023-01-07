import { useState } from "react";
import styles from "./user.module.css";
import plusIcon from "../../imgs/icon-plus.png";
import minusIcon from "../../imgs/icon-minus.png";

const User = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  const onClickToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <li className={styles.item}>
      <button className={styles.btn} onClick={onClickToggle}>
        <img
          className={styles.img}
          src={showMore ? minusIcon : plusIcon}
          alt="icon"
        />
        <span>{user.name}</span>
      </button>

      {showMore && (
        <div className={styles.userInfo}>
          <p>
            <span className={styles.text}> Username: </span>
            {user.username}
          </p>
          <p>
            <span className={styles.text}>Email:</span> {user.email}
          </p>
          <p>
            <span className={styles.text}>Phone:</span> {user.phone}
          </p>
          <p>
            <span className={styles.text}>Website:</span>{" "}
            {<a href="/">{user.website}</a>}
          </p>
          <p>
            <span className={styles.text}>Company:</span> {user.company}
          </p>
        </div>
      )}
    </li>
  );
};

export default User;

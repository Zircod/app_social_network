import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.content__img} src="https://ibb.co/Bq5W2JY" alt="main img"/>
      </div>
      <div className={s.discriptionBlock}>
        ava + disctiption
      </div>
    </div>
  );
}

export default ProfileInfo;
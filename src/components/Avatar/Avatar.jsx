import React from 'react';
import s from './Avatar.module.css';

// birthdayString format "YYYY-MM-DD"
function _calculateAge(birthdayString) {
  let birthDate = new Date(birthdayString);
  let ageDifMs = Date.now() - birthDate.getTime();  // calculate milliseconds difference from current date in time 
  let ageDate = new Date(ageDifMs);    // convert the calculated difference in date format 
  let year = ageDate.getUTCFullYear(); // extract year from date
  let age = Math.abs(year - 1970);     // now calculate the age of the user
  return age;
}

function Avatar(props) {
  let info = props.avatar.profileInfo;
  let avatarImg = info.profileImage;
  let age = _calculateAge(info.birthday);

  return (
    <div className={s.appAvatarWrapper}>
      <div className={s.innerWrapper}>
        <div className={s.leftSide}>
          <div className={s.avatarWrapper}>
            <img className={s.avatar} src={avatarImg.imgSrc} alt={avatarImg.imgAlt} />
          </div>
        </div>
        <div className={s.rightSide}>
          <div className={s.name}>{info.name}</div>
          <div className={s.age}>{age + " years"}</div>
          <div className={s.city}>{info.location}</div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;

import React from 'react';
import s from './ProfileInformation.module.css';


// The padStart() method in JavaScript is used to pad a string with another string until it reaches the given length.
function changeDateFormat(stringDate) {  // change to dd/mm/yyyy
  var today = new Date(stringDate);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  var yyyy = today.getFullYear();
  return dd + '/' + mm + '/' + yyyy; 
}

function ProfileInformation(props) {

  return (
    <div className={s.profileInfo}>
      <div className={s.profileImageWrapper}>
        <img className={s.profileImage} src={props.profileInfo.imgSrc} alt="profile avatar" />
      </div>
      <div className={s.userInfo}>
        <div className={`${s.name} ${s.info}`}>
          <div className={s.field}>Name:</div>
          <div className={s.value}>{props.profileInfo.name}</div>
        </div>
        <div className={`${s.birthday} ${s.info}`}>
          <div className={s.field}>Birthday:</div>
          <div className={s.value}>{changeDateFormat(props.profileInfo.birthday)}</div>
        </div>
        <div className={`${s.city} ${s.info}`}>
          <div className={s.field}>City:</div>
          <div className={s.value}>{props.profileInfo.location}</div>
        </div>
        <div className={`${s.education} ${s.info}`}>
          <div className={s.field}>Education:</div>
          <div className={s.value}>{props.profileInfo.education}</div>
        </div>
        <div className={`${s.website} ${s.info}`}>
          <div className={s.field}>Website:</div>
          <div className={s.value}>{props.profileInfo.website}</div>
        </div>
      </div>
    </div >
  );
}

export default ProfileInformation;
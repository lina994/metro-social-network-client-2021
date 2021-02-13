import React from 'react';
import s from './ProfileInformation.module.css';

import profileImage from '../../../resources/profile_image.jpg'

// The padStart() method in JavaScript is used to pad a string with another string until it reaches the given length.
function changeDateFormat(stringDate) {  // change to dd/mm/yyyy
  var today = new Date(stringDate);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  var yyyy = today.getFullYear();
  return dd + '/' + mm + '/' + yyyy; 
}

function ProfileInformation(props) {
  let basicInfo = props.profileInfo.profileBasicInfo;
  let additionInfo = props.profileInfo.profileAdditionalInfo;

  return (
    <div className={s.profileInfo}>
      <div className={s.profileImageWrapper}>
        <img className={s.profileImage} src={profileImage} alt="profile avatar" />
      </div>
      <div className={s.userInfo}>
        <div className={`${s.name} ${s.info}`}>
          <div className={s.field}>Name:</div>
          <div className={s.value}>{basicInfo.name}</div>
        </div>
        <div className={`${s.birthday} ${s.info}`}>
          <div className={s.field}>Birthday:</div>
          <div className={s.value}>{changeDateFormat(basicInfo.birthday)}</div>
        </div>
        <div className={`${s.city} ${s.info}`}>
          <div className={s.field}>City:</div>
          <div className={s.value}>{basicInfo.location}</div>
        </div>
        <div className={`${s.education} ${s.info}`}>
          <div className={s.field}>Education:</div>
          <div className={s.value}>{additionInfo.education}</div>
        </div>
        <div className={`${s.website} ${s.info}`}>
          <div className={s.field}>Website:</div>
          <div className={s.value}>{additionInfo.website}</div>
        </div>
      </div>
    </div >
  );
}

export default ProfileInformation;
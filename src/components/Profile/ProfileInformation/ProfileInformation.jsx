import React from 'react';
import s from './ProfileInformation.module.css';

import profileImage from '../../../resources/profile_image.jpg'

function ProfileInformation(props) {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileImageWrapper}>
        <img className={s.profileImage} src={profileImage} alt="profile image" />
      </div>
      <div className={s.userInfo}>
        <div className={`${s.name} ${s.info}`}>
          <div className={s.field}>Name:</div>
          <div className={s.value}>Oscar</div>
        </div>
        <div className={`${s.birthday} ${s.info}`}>
          <div className={s.field}>Birthday:</div>
          <div className={s.value}>2/7/2010</div>
        </div>
        <div className={`${s.city} ${s.info}`}>
          <div className={s.field}>City:</div>
          <div className={s.value}>Tel-Aviv, Israel</div>
        </div>
        <div className={`${s.education} ${s.info}`}>
          <div className={s.field}>Education:</div>
          <div className={s.value}>None</div>
        </div>
        <div className={`${s.website} ${s.info}`}>
          <div className={s.field}>Website:</div>
          <div className={s.value}>None</div>
        </div>
      </div>
    </div >
  );
}

export default ProfileInformation;
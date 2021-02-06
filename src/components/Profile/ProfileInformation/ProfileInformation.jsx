import React from 'react';
import s from './ProfileInformation.module.css';

import profileImage from '../../../resources/profile_image.jpg'

function ProfileInformation(props) {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileImageWrapper}>
        <img className={s.profileImage} src={profileImage} alt="profile image" />
      </div>
      <div className={s.profileDescription}>
        MyName
        Birthday
        city
        Education
        Web Site
        </div>
    </div>
  );
}

export default ProfileInformation;
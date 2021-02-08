import React from 'react';
import s from './Avatar.module.css';

import profileImage from '../../resources/profile_image.jpg'

function Avatar(props) {
  return (
    <div className={s.appAvatarWrapper}>
      <div className={s.innerWrapper}>
        <div className={s.leftSide}>
          <div className={s.avatarWrapper}>
            <img className={s.avatar} src={profileImage} alt="profile image" />
          </div>
        </div>
        <div className={s.rightSide}>
          <div className={s.name}>Oscar</div>
          <div className={s.age}>26 years</div>
          <div className={s.city}>Tel-Aviv, Israel</div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;

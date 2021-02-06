import React from 'react';
import s from './Profile.module.css';

import Cover from './Cover/Cover';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import Posts from './Posts/Posts';

function Profile(props) {
  return (
    <section className={s.appProfile}>
      <Cover />
      <ProfileInformation />
      <Posts />
    </section>
  );
}

export default Profile;
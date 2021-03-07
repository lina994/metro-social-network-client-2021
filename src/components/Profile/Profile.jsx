import React from 'react';
import s from './Profile.module.css';

import Cover from './Cover/Cover';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import Posts from './Posts/Posts';

function Profile(props) {
  return (
    <section className={s.appProfile}>
      <Cover cover={props.profilePage.cover} />
      <ProfileInformation profileInfo={props.profilePage.profileInfo}/>
      <Posts posts={props.profilePage.posts} dispatch={props.dispatch} />
    </section>
  );
}

export default Profile;
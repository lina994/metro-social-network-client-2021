import React from 'react';
import s from './Cover.module.css';

import coverImage from '../../../resources/cover_image.jpg'

function Cover(props) {
  return (
    <div className={s.coverImageWrapper}>
      <img className={s.coverImage} src={coverImage} alt="cover image" />
    </div>
  );
}

export default Cover;
import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
          <div className={classes.item}>
            <img src='https://vraki.net/sites/default/files/mood/u.jpg' />
            {props.message}
            <div>
              <span>{props.count} like</span>
            </div>
          </div>
  );
}

export default Post;
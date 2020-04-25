import React from 'react';
import './Post.css';

import Comment from './comment/Comment';

function Post({ data }) {
  return (
    <li className="post" key={data.id}>
      <div className="container-post">
        <div className="user">
          <img src={data.author.avatar} alt="" />
          <div className="user-info">
            <p>{data.author.name}</p>
            <small>{data.date}</small>
          </div>
        </div>
        <div className="content-user">
          {data.content}
        </div>
        <hr />

        <ul className="comment">
          {data.comments.map(comment =>
            <Comment key={comment.id} data={comment} />
          )}
        </ul>

      </div>
    </li>
  );
}

export default Post;
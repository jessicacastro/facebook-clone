import React from 'react';

import './Comment.css';

function Post({ data }) {
  return(
    <li className="content-comment" key={data.id}>
      <img src={data.author.avatar} alt="Foto comentário"/>
      <div className="comment">
        <strong>{data.author.name}</strong>&nbsp;&nbsp;
        {data.content}
      </div>
    </li>
  );
}

export default Post;
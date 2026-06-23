import React from "react";
import style from './Post.module.css';

export default function Post(props) {
  const {post} = props;
  return (
    <div className={`${style.card} card col-md-4 g-2 `}>
      <img src={post.image_url} className={`${style.ImgSize} card-img-top`} alt={post.tittle} />
      <div className="card-body">
        <h3>{post.title}</h3>
        <p>{post.publisher}</p>
      </div>
    </div>
  );
}

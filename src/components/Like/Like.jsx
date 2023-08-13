import React, { useState } from 'react';
import updateLikeStatus from './updateLikeStatus';

const Like = ({ postId, initialLikeStatus }) => {
  const [like, setLike] = useState(initialLikeStatus);

  const toggleLike = async () => {
    const newLikeStatus = !like;
    await updateLikeStatus(postId, newLikeStatus);
    setLike(newLikeStatus);
  };

  return (
    <div style={{ width: "auto", height: "auto" }}>
      <h2 style={{ cursor: "pointer" }} onClick={toggleLike}>
        {like ? '❤️' : '🤍'}
      </h2>
    </div>
  );
};

export default Like;

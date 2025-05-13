import React from 'react';
import './Post.css';

function Post({ username, question, answer }) {
  return (
    <div className="post">
      <h4>{username} asked:</h4>
      <p><strong>{question}</strong></p>
      <p>{answer}</p>
    </div>
  );
}

export default Post;

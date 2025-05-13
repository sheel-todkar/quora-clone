import React from 'react';
import QuestionBox from './QuestionBox';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      <QuestionBox />
      <Post
        username="Alice"
        question="What is React?"
        answer="React is a JavaScript library for building user interfaces."
      />
      <Post
        username="Bob"
        question="How to learn web development?"
        answer="Start with HTML, CSS, JavaScript, then learn frameworks like React."
      />
    </div>
  );
}

export default Feed;

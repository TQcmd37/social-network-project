import { useState } from 'react';
import PostForm from '../postForm/PostForm';
import NewPost from '../newPost/NewPost';

const Container = () => {
  const [posts, setPosts] = useState([]);

  const handleTweetSubmit = (text) => {
    const newPost = {
      userImage: 'URL_TO_USER_IMAGE', // Replace with the URL of the user's image
      userName: 'John Doe', // Replace with the user's name
      text: text,
      date: new Date().toLocaleString(),
    };
    setPosts((prevPost) => [newPost, ...prevPost]);
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:w-4/5 lg:w-3/5 ">
      <PostForm onSubmit={handleTweetSubmit} />
      <div className="mt-4">
        {posts.map((post, index) => (
          <NewPost key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Container;


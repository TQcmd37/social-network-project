import { useEffect, useState } from 'react';
import PostForm from '../postForm/PostForm';
import NewPost from '../newPost/NewPost';
import axios from 'axios';

const Container = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      async function fetchPosts() {
        try {
          const response = await axios.get('http://localhost:3000/api/posts');

          const sortedPosts = response.data.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date))
          setPosts(sortedPosts);
        } catch (error) {
          console.error('Error al obtener los posteos:', error);
        }
      }
  
      fetchPosts();
    }, [posts]);
  
    return (
      <div className="container mx-auto mt-12 p-4 sm:w-4/5 lg:w-3/5 ">
        <PostForm />
        <div className="mt-4">
          {posts.map((post, index) => (
            <NewPost key={index} post={post} />
          ))}
        </div>
      </div>
    );
};

export default Container;


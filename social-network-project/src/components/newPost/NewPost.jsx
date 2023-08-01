import PropTypes from 'prop-types';

const  NewPost = ({ post }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow m-1">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
              <img src={post.userImage} alt="User" className="w-10 h-10 rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="font-bold">{post.userName}</div>
            <div>{post.text}</div>
            <div className="text-gray-500 text-sm">{post.date}</div>
          </div>
        </div>
      </div>
    );
  };
  NewPost.propTypes = {
    post: PropTypes.func.isRequired,
  };
  
  export default NewPost;
  
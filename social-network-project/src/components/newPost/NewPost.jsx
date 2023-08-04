import PropTypes from 'prop-types';
import { format   } from 'date-fns'

const  NewPost = ({ post }) => {
  const formattedDate = format(new Date(post.publication_date), "MMMM dd',' yyyy HH:mm");
    return (
      <div className="bg-white p-4 rounded-lg shadow m-1">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
              <img src={post.profile_picture} alt="User" className="w-10 h-10 rounded-full" />
            </div>
          </div>
          <div className="flex-grow">
            <div className="font-bold">{post.user_name}</div>
            <div>{post.content}</div>
            <div className="text-gray-500 text-sm">{formattedDate}</div>
          </div>
        </div>
      </div>
    );
  };
  NewPost.propTypes = {
    post: PropTypes.object.isRequired,
  };
  
export default NewPost;
  
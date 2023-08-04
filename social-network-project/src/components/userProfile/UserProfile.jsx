import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams()
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3000/auth/user/${id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]); 

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow">
      <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
        <img className="w-24 h-24 rounded-full" src={userData.profile_picture} alt="Profile" />
      </div>
      <h1 className="text-3xl font-bold mt-4">{userData.user_name}</h1>
      <p>Email: {userData.email}</p>
      <p>Birthday: {userData.birthday}</p>
      <p>Gender: {userData.gender}</p>
    </div>
  );
};

export default UserProfile;

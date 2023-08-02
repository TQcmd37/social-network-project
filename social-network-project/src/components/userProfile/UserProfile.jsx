// import { useState } from 'react';
// import axios from 'axios';

const UserProfile = () => {
    const userData = {
        id: 1,
        user_name: "Carlos",
        email:"carlos@gmail.com",
        id_rol :"user",
        profile_picture: "https://pps.whatsapp.net/v/t61.24694-24/364213491_798269322079496_200322145048207137_n.jpg?ccb=11-4&oh=01_AdRUHMWH4r9sEWC6HUlqfrVdV5I03s0YZPRkEB2ERxhI3Q&oe=64D6B3AA",            
        birthday: new Date("1990-05-15"),
        gender: "male"
    }
    const formattedBirthday = new Date(userData.birthday).toLocaleDateString();//esto se sacaria una vez que tenga la fecha corecta que viene del back

//   const [userData, setUserData] = useState(null);

//   useEffect(() => {

//     axios.get('http://localhost:3000/api/user')
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []); 

//   if (!userData) {
   
//     return <div>Loading...</div>;
//   }

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow">
      <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
        <img className="w-24 h-24 rounded-full" src={userData.profile_picture} alt="Profile" />
      </div>
      <h1 className="text-3xl font-bold mt-4">{userData.user_name}</h1>
      <p>Email: {userData.email}</p>
      <p>Birthday: {formattedBirthday}</p>
      <p>Gender: {userData.gender}</p>
    </div>
  );
};

export default UserProfile;

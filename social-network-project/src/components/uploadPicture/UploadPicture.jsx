import { useState } from 'react';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import axios from 'axios';
import useAuthStore from '../../store/useAuthStore';

const DEFAULT_IMG = 'https://static.vecteezy.com/system/resources/previews/002/519/144/non_2x/social-media-avatar-free-vector.jpg'

export default function UploadPicture(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState(null);
  const { logged_id } = useAuthStore()

  const handleFileChange = (event) => {
    if(event.target.files[0]){
        setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const imageRef = ref(storage, `/user${Math.random()}/image-${Date.now()}`)
    uploadBytes(imageRef, selectedFile).then(()=> {
        getDownloadURL(imageRef).then((url) => {
            setUrl(url)
            axios.patch(`http://localhost:3000/auth/user/${logged_id}`, {
              profile_picture: url
            })
        })
        .catch((error) => {
            console.log(error.message, "Error obteniendo la imagen");
        })
        setSelectedFile(null)
    }).catch((error) => {
        console.log(error.message, "Error obteniendo la imagen");
    })
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <label className="block mb-2 text-gray-700">Seleccione una imagen:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full mb-4 p-2 border rounded"
        name="profilePicture"
      />
      {url ? <img src={url} className="w-32 h-32 rounded-full object-cover mx-auto border"/> : <img src={DEFAULT_IMG} className="w-32 h-32 rounded-full object-cover mx-auto border"/>}
      <button onClick={handleUpload} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto flex my-4'>Subir imagen</button>
    </div>
  );
}

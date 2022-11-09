import React, {useState} from 'react'
import { db } from "../firebase";
import { storage } from '../firebase';
import { addDoc, collection, getDocs, ref, uploadBytes, } from "firebase/firestore";
import { v4 } from "uuid";

const Create = () => {
    const [title, setTitle] = useState();
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState();
    const [tags, setTags] = useState([]);

    const projectCollectionRef = collection(db, "blog");

    const saveData = async () => {
    //     if(image == null) return;
    //     const imageRef = ref(storage, `images/${image.name + v4()}`);
    
    // uploadBytes(imageRef, image).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
        await addDoc(projectCollectionRef, {
          title: title,
          description: description,
          tags: tags,
        });
      };

  return (
    <div className='md:w-[60%] sm:w-[90%] mx-auto mt-4'>
        <div className='my-2'>
            <label htmlFor="" className='block'>Title</label>
            <input type="text" placeholder='Title' onChange={(e) => {
                setTitle(e.target.value);
              }}  className='border-2 border-gray-light px-4 py-2 rounded outline-none w-full'/>
        </div>
        <div className='my-2'>
            <label htmlFor="" className='block'>Feature Image</label>
            <input type="file" placeholder='Title'  
            onChange={(e) => {
                setImage(e.target.value);
              }} 
              className='border-2 border-gray-light px-4 py-2 rounded outline-none w-full'/>
        </div>
        <div className='my-2'>
            <label htmlFor="" className='block'>Description</label>
            <textarea onChange={(e) => {
                setDescription(e.target.value);
              }}   name="" id="" cols="30" rows="5" placeholder='Tell a story...' className='border-2 border-gray-light px-4 py-2 rounded outline-none w-full'></textarea>
        </div>
        <div className='my-2'>
            <label htmlFor="" className='block'>Tags</label>
            <input onChange={(e) => {
                setTags(e.target.value);
              }}  type="text" multiple placeholder='Title' className='border-2 border-gray-light px-4 py-2 rounded outline-none w-full'/>
        </div>
        <div>
            <button onClick={saveData} className="btn btn-notice">Save</button>
        </div>
  
    </div>
  )
}

export default Create
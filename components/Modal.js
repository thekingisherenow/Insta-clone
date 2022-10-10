import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState ,InputText} from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import {db,storage} from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import {  useSession } from 'next-auth/react';
import { ref ,getDownloadURL ,uploadString } from "firebase/storage";

function Modal() {
  const { data:session } = useSession(); 

  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const addImageToPost = (e)=>{
      const reader = new FileReader();
      if (e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
      }
      reader.onload = (readerEvent) => {
        setSelectedFile(readerEvent.target.result)
      }
  }
  const uploadPost =async ()=>{
      if (loading) return;

      setLoading(true);

      //1. create a post and add to firestore "posts" collection
      //2. get the post id for newly created post .
      //3.upload the image to firebase storage with post ID
      //4. get a download url from firebase storage and update the original post with image. 

      const docRef = await addDoc(collection(db,'posts'),{
        username : session.user.username,
        caption : captionRef.current.value,
        profileImg : session.user.image,
        timestamp : serverTimestamp()
      })

      console.log("New doc added with Id",docRef.id);
      
      const imageRef = ref(storage,`posts/${docRef.id}/image`)

      await uploadString(imageRef, selectedFile ,"data_url").then (async snapshot =>{
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'posts', docRef.id),{
          image : downloadURL,

        })
      })

      setOpen(false);
      setLoading(false);
      setSelectedFile(null);

  }

  function closeModel() {
    setOpen(false)
  }
  function openModel() {
    setOpen(true)
  }
  
  function removepicture(){
    setSelectedFile(null)
  }


  return (
    <Transition show={open} as={Fragment}>
      <Dialog as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={closeModel}>

        <div className="flex px-4 sm:block text-center
          min-h-[800px] sm:min-h-screen pt-4 pb-20  sm:p-0">

        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div >
              <Dialog.Panel className=" inline-block
              ml-16 w-72 sm:w-1/2  h-[400px]  sm:h-[500px] 
               transform overflow-hidden 
                rounded-2xl bg-white p-6 align-middle shadow-xl transition-all mt-28">
                

                <div>

                  {selectedFile? (
                    <>
                    <div className=" flex border-b-2   ">

                    <ArrowLeftIcon onClick={removepicture}
                     className="h-8 cursor-pointer  " 
                    />
                      {loading? (
                        <h1 className=" mx-auto font-bold flex 
                        justify-center">Uploading
                        </h1>) : (
                          <h1 className=" mx-auto font-bold flex 
                          justify-center items-center " >Create new Post </h1> ) }
                    
                    
                    <button className="flex justify-end font-semibold 
                    cursor-pointer disabled:bg-gray-300 hover:text-blue-700
                     disabled:cursor-not-allowed
                    text-blue-400"
                    onClick={uploadPost}
                    disabled= {!selectedFile } 
                    > Share </button>
                    </div>
                      <div className="flex items-center  ">
                        
                    <input 
                    type="textarea" 
                    className=" focus:ring-0 focus:border-none border-none w-full p-4 mb-5" 
                    ref = {captionRef}
                    placeholder="Write your caption.. "/>
                    </div>

                      <img className=" object-contain  w-[700px] "
                      src= {selectedFile} alt = "uploaded pic " />
                      {/* <div>
                     
                       </div> */}
                    


                    </>

                  ):(
                      
                    <div  >
                    <h1 className="border-b-2 flex font-bold justify-center
                   items-center ">Create new Post.</h1>
                    <div className=" flex mt-20 flex-col justify-center items-center">
                    <img className="h-20 "
                      src="https://iili.io/L3aWan.png" alt="insta upload image" />
                    <h1 className="text-2xl">Drag photoes and videos here. </h1>
                    <input
                    ref = {filePickerRef}
                    type="file"
                    hidden
                    onChange={addImageToPost}
                    />
                    <button
                   onClick={()=> filePickerRef.current.click()}         
                   className="bg-blue-400 w-50 p-1 my-5 text-white"
                   >Select from Computer</button>
                  </div>
                    
                    </div>
          
                  )}
                  
                </div>
                
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>


      </Dialog>
    </Transition>



  );

}

export default Modal;
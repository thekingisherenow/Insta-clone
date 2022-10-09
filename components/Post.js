import { async } from '@firebase/util';
import { EllipsisHorizontalIcon,HeartIcon,ChatBubbleOvalLeftIcon,
    PaperAirplaneIcon,BookmarkIcon,FaceSmileIcon} from '@heroicons/react/24/outline';
    import { HeartIcon as SolidHeart} from '@heroicons/react/24/solid';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { db } from '../firebase';

function Post({id,userName,userImg,img,caption}) {

    const {data:session} = useSession()

    const [posts,setPosts] = useState([]);
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false);

    const sendComment = async(e)=>{
        e.preventDefault();

        const commentToSend = comment;
        setComment(''); 

        await addDoc(collection(db,'posts',id , 'comments'),{
            comment : commentToSend,
            username : session.user.username,
            userImg : session.user.image,
            timestamp: serverTimestamp()
        })
    }

    useEffect(() => {
      onSnapshot(query(collection(db,"posts",id,"comments"),orderBy('timestamp','desc'))
      ,(snapshot)=> setComments(snapshot.docs))
      
    }, [db,id])
    
    useEffect(() => {
      onSnapshot(query(collection(db,"posts",id,"likes")),(snapshot)=> 
      setLikes(snapshot.docs))
    
      
    }, [db,id])

    useEffect(()=>
        setHasLiked(
            likes.findIndex((like) =>like.id === session?.user?.uid) !== -1)

    ,[likes])
    
    const likePost = async ()=>{

        if (hasLiked){
            await deleteDoc(doc(db,"posts",id,"likes",session.user.uid))
        }
        else {
            await setDoc(doc(db,"posts",id,"likes",session.user.uid),{
                username:session.user.username
            })
        }
        
    }
    


    return (
         <div className='bg-white my-7 border '>
        
        {/* Header */}
        <div className='flex p-5 items-center '>
            
            <img className='h-12 w-12 object-cover rounded-full 
            border p-1 mr-3 cursor-pointer'
            src= {userImg} />
            <div className='flex-1'>
            <p className=' font-bold cursor-pointer'>{userName} </p>
            </div>
            <EllipsisHorizontalIcon className='h-5 cursor-pointer'/>
        

        </div>
        {/* Image  */}
            <img src ={img} className="w-full items-contain
             flex justify-end items-center"/>

        {/* Buttons */}
        {session && (

            <div className='flex justify-between px-4 pt-4 items-center'>
            <div className='flex space-x-4'>
            {hasLiked? (
                 <SolidHeart onClick={likePost}
                 className='btn text-red-500' />
                 
            ):
            (
                <HeartIcon onClick={likePost}
                 className='btn'
                 />
            )

            }
           
            
            <ChatBubbleOvalLeftIcon className='btn'/>
            <PaperAirplaneIcon className='btn -rotate-45'/>
            </div>
            <BookmarkIcon className='btn' />
        </div>
        )}

      

        {/* Likes && Captions  */}
        <div className='p-1 mt-3 ml-4 truncate'>
                 {likes.length>0 && (
            <p className='font-bold mb-2 '>{likes.length} {(likes.length =1)? ("like"):
                ("likes")} </p>
      
        )}

            <span className='font-bold  mr-1'>{userName}</span>
            <span>{caption}</span>
        </div>
        {/* comments */}
            {comments.length>0 && (
                <div className='ml-5 h-14 overflow-y-scroll
                 scrollbar-thin scrollbar-thumb-black  '> 
                    {comments.map(comment=>(
                        <div key={comment.id} className="flex  items-center">
                            {/* <img className='rounded-full h-12 p-1 border '
                            src= {comment.data().userImg} alt = "comment ko userimage" /> */}
                            
                            <p className='text-sm font-semibold p-1  mr-1'> 
                            {comment.data().username}</p>
                            <p className='flex-1'> {comment.data().comment}</p>
                            <Moment className="pr-5 text-sm"
                            fromNow>{comment.data().timestamp?.toDate()}
                            </Moment>
                            </div>
                    ))}
                </div>
            )}




        {/* input box */}
        {session && (
            <form className='flex items-center p-4'>
            <FaceSmileIcon className='h-8 cursor-pointer'/>
            <input 
                value={comment}
                onChange= {e=>setComment(e.target.value)}
            className='border-none flex-1 focus:ring-0 
            outline-none'
            type = "text" placeholder='Add a comment...'/>
            <button type='submit'
            disabled={!comment.trim()}
            onClick={sendComment}
            className='font-semibold text-blue-400 cursor-pointer'>Post</button>
        </form>

        )}



    </div> );
}

export default Post;
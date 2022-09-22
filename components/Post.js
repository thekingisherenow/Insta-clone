import { EllipsisHorizontalIcon,HeartIcon,ChatBubbleOvalLeftIcon,
    PaperAirplaneIcon,BookmarkIcon,FaceSmileIcon} from '@heroicons/react/24/outline';

function Post({id,userName,userImg,img,caption}) {
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
        <div className='flex justify-between px-4 pt-4 items-center'>
            <div className='flex space-x-4'>
            <HeartIcon className='btn' />
            <ChatBubbleOvalLeftIcon className='btn'/>
            <PaperAirplaneIcon className='btn -rotate-45'/>
            </div>
            <BookmarkIcon className='btn' />
        </div>

        {/* Likes */}
        {/* Captions  */}
        <div className='p-5 truncate'>
            <span className='font-bold mr-2'>{userName}</span>
            <span>{caption}</span>
        </div>
        {/* comments */}

        {/* input box */}
        <form className='flex items-center p-4'>
            <FaceSmileIcon className='h-8 '/>
            <input className='border-none flex-1 focus:ring-0 
            outline-none'
            type = "text" placeholder='Add a comment...'/>
            <button className='font-semibold text-blue-400'>Post</button>
        </form>



    </div> );
}

export default Post;
import React from 'react';

const Story = (props) => {
    return (
        <>

        <div className=' flex flex-col space-y-1 '>
            <div className=' relative h-[70px] w-[70px]
            bg-gradient-to-tr from-yellow-400 to-fuchsia-600 
            p-1 rounded-full cursor-pointer transition hover:scale-110
            transform duration-200 ease-out' >

            <div className=' 
            block bg-white p-1 rounded-full' >
                <img  className='  object-cover
             rounded-full' src={props.img} alt="profile-picture" />
            </div>
                </div>
            <p className='text-sm text-center w-[70px] truncate'>{props.username}</p>
           
        </div>
             </>
    );
}

export default Story;
import { faker } from '@faker-js/faker';
import { useSession } from 'next-auth/react';
import React from 'react';

import { useState,useEffect } from 'react';
import Story from './Story';

function Stories() {

    const [suggestions, setSuggestions] = useState([])

    const {data:session} = useSession();
    
    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i)=>({
            id :i ,
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        })
        )
        setSuggestions(suggestions)
      }, []);
    //   console.log(suggestions)
    //   var size = Object.keys(suggestions).length;
    //   console.log("size", size)
      
    return (
    <div className='flex mt-4 ml-2  space-x-2 p-6 
    overflow-x-scroll rounded-sm border-gray-100 border
    scrollbar-thin scrollbar-thumb-black '>
      

        {session && (
            <>
            <Story className="relative"
            img = {session.user.image} username= {session.user.username} /> 

            {/* <button className=' absolute h-10 text-white 
            font-bold text-center  right-1
            w-10 bg-blue-400 border p-1 text-2xl rounded-full '>+</button>
            
        */}
          </>
            ) }
        {suggestions.map(profile =>(
            
         <Story key = {profile.id} 
            img = {profile.avatar}
            username = {profile.username}/>
        ))}
       
    
    </div> 
    );
}

export default Stories;

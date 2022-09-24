import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, HomeIcon, HeartIcon, PlusCircleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

function Header() {
  
  const {data:session} = useSession()
  const [open,setOpen] = useRecoilState(modalState)
  const router = useRouter()


  console.log(session)
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>

      <div className='flex justify-between max-w-6xl mx-3 xl:mx-auto'>
        {/* // left */}
        <div 
        onClick={()=> router.push("/")}
        className='relative hidden lg:inline-block   w-28 h-16 cursor-pointer'>
          <Image
            src="https://links.papareact.com/ocw"
            layout='fill' objectFit='contain' />
        </div>
        <div onClick={()=> router.push("/")}
         className='relative flex-shrink-0 my-4 lg:hidden w-10 h-10 cursor-pointer'>
          <Image
            src="https://links.papareact.com/jjm"
            layout='fill' objectFit='contain' />
        </div>

         {/* // middle - Search Input Field */}
        <div >

          <div className='relative mt-1 p-2 rounded-md flex-shrink-1 ' >
            <div className='absolute inset-y-0 pl-3 flex items-center 
            pointer-events-none '>
              <MagnifyingGlassIcon className=' h-5 w-5 text-gray-500' />

            </div>
            <input className=' bg-gray-100 block w-full pl-10 sm:text-sm
             border-gray-300
             focus:border-black focus:ring-black
              rounded-md' type="text" placeholder='Search' />

          </div>
        </div>

        {/* // right  */}
        <div >
          <div className='flex items-center justify-end space-x-2 mt-3'>
            <HomeIcon 
            className='navBtn hiddenBtns ' 
            onClick={()=> router.push("/")}/>
            

            {session? (
              <>
                <div className='relative navBtn'>
                <HeartIcon className='navBtn ' />
                <div className='absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center
                 bg-red-500 rounded-full animate-pulse text-white
                 '>3</div>
              </div>
              
              
              <PlusCircleIcon onClick={()=>setOpen(true)}
              className='navBtn ' />
  
              <img onClick={signOut}
              src={session?.user?.image}
              alt = "profile pic "  
              className='h-10 w-10 rounded-full object-cover
               cursor-pointer'
              ></img>
              </>
            ) : (
              <button onClick={() => signIn()}
              className="font-semibold text-sm text-center" >Sign in</button>
            )
            }
            
          </div>
        </div>
      </div >
    </div>
  )
}

export default Header
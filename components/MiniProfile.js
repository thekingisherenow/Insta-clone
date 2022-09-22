import { signIn, signOut, useSession } from 'next-auth/react';


function MiniProfile() {
    const { data: session } = useSession()


    return (

        <div className="p-4 flex border mt-14 ml-10 items-center 
                justify-between">
            <img src={session?.user?.image}
                className="h-16 w-16 rounded-full border p-1 object-cover" />

            <div className="flex-1 mx-4 ">
                <h2 className="font-bold">{session?.user?.username}</h2>
                <h3 className="text-sm text-gray-500"> Welcome to Instagram</h3>
            </div>

            <button onClick={signOut}
                className="text-blue-400 text-sm font-semibold">Sign out</button>
        </div>

    )
}
export default MiniProfile;
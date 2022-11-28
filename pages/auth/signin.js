import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Head from "next/head";
import Header from "../../components/Header";

function signIn({ providers }) {
  const imageList=["https://pngimg.com/uploads/google/google_PNG19635.png","https://iili.io/LTkYwN.png"]
  return (
    <> 
        <Head>
        <title> Login </title> 
        <link rel ="shortcut icon" href="/favicon.png"/>
        </Head>
      <div className="flex flex-col border bg-white items-center justify-center mt-10 max-w-md mx-auto
       "> 

        <img className="w-44 mt-6 object-contain "
        src= "https://links.papareact.com/ocw"/>

{/* <div className="relative my-4">
    <input type="text" id="email" className="block px-2.5 pb-2.5 pt-4 w-80 text-sm
     text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none
      dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
      focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
    transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 
    peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
    peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone number,username,or email </label>
</div>
<div className="relative">
    <input type="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-80 text-sm
     text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none
      dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
      focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
    transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 
    peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
    peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password </label>
</div>


    <button type = "submit" className="m-4 bg-blue-500 text-white p-4 w-80 h-10 flex items-center 
    text-center justify-center text-sm font-semibold
    " > Log In </button>

      <h1> OR</h1>  */}

      <p> This is a clone site created just for educational purpose.
          </p>
        
        <div className="my-40 flex flex-col space-y-10  ">
          
          {Object.values(providers).map((provider,i) => (

            <div key={provider.name} 
             onClick={() => SignIntoProvider(provider.id,{callbackUrl : '/' })}
            className= "flex border-solid border py-2 px-5 border-gray-200 hover:bg-gray-300 ">
              {/* <h1>{provider.name}</h1> */}
              <img className="h-10 w-10 object-contain"
              src= {imageList[i]} />
              <button className=" " >
                Sign in with {provider.name}
              </button>
            </div>)
          )}
        </div>

     
      </div>


    </>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
}


export default signIn;
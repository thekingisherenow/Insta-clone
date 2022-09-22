import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from "../../components/Header";

function signIn({ providers }) {

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center 
      min-h-screen  -mt-36                   "> 
        <img className="w-80 object-contain "
        src= "https://links.papareact.com/ocw"/>
        <div className="mt-40 ">

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className=" p-3 text-center
             rounded-lg h-20 text-white border bg-blue-400"
                onClick={() => SignIntoProvider(provider.id,{callbackUrl : '/' })}>
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
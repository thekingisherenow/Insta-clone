import { useRouter } from "next/router";

function username() {

    const router = useRouter();
  /// yaha check garna milchaa-- k bhanda kheri naam cha ki naai bhaneraa.. chaina bhane. chutta kei 
  //dispaly garnauna milcha..404 page not found error

  //check if the username exists in firebase storage or not.
    const {userName} = router.query;

    return (
        <div>
           <h1> Hii,, {userName} </h1>
        </div>
      );
}

export default username;
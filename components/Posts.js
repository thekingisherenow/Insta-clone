import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";


function Posts() {

     const {data:session} = useSession()

    const [posts,setPosts] = useState([]);
    const [comment, setComment] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
      const unsubscribe = onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc' )),snapshot =>{
        setPosts(snapshot.docs)
      })
        return () => {
            unsubscribe
        }
    }, [db])
    

    return (  <div>
       {posts.map((post)=>(
        <Post key= {post.id}
        id = {post.id}      
        userName={post.data().username}
        userImg = {post.data().profileImg }
        img = {post.data().image}  
          caption = {post.data().caption}   
        />
       )) }

    </div>
    );
}

export default Posts;
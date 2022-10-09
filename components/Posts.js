import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const posts = [
    {
        id:"123",
        userName:"pj",
        userImage:"https://iili.io/iIEo8v.jpg",
        img: "https://iili.io/iIEq6g.jpg",
        caption:"This is DOPEEE !! I need to check how the flex works.and instead of watching videos-doing stuffs like tis is good"
    },
    {
        id:"124",
        userName:"Dikshya",
        userImage:"https://iili.io/iIECFa.jpg",
        img: "https://iili.io/iIEncJ.jpg",
        caption:"kasto tasina aauche k yo feri."
    }
]
function Posts() {

    const [posts,setPosts] = useState([]);

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
        userImg = {post.data().profileImg}
        img = {post.data().image}  
          caption = {post.data().caption}   
        />
       )) }

    </div>
    );
}

export default Posts;
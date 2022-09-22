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
    return (  <div>
       {posts.map((post)=>(
        <Post key= {post.id}
        id = {post.id}      userName={post.userName}
        userImg = {post.userImage}
        img = {post.img}    caption = {post.caption}   
        />
       )) }

    </div>
    );
}

export default Posts;
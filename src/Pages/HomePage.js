 import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"
import React, { useEffect, useState } from "react"
 import { auth, db } from "../firebase-config"
 export default function Home({isAuth}){

    const [postList, setPostList] = useState([])

    const postCollectionRef = collection(db, 'posts')
    useEffect(()=>{
        const getPosts = async() => {
            const data = await getDocs(postCollectionRef)
            setPostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }
        getPosts()
    },[])

    const deletePost = async(id) => {
        const postDoc = doc(db, "posts", id)
        await deleteDoc(postDoc)
    }

    return(
        <div className="homePage">
        {postList.map((post) => {
            return <div className="post" key={post.id}>
            <div className="postHeader"> 
            <div className="title"> 
            <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
             {isAuth && post.author.id === auth.currentUser.uid && 
            <button 
             onClick={() => {deletePost(post.id)}}>
             X
             </button>}
            </div>
            </div>
            <div className="posttextContainer">{post.postText}</div>
            <h3>@{post.author.name}</h3>
            </div>
        })}
        </div>
    )
 }
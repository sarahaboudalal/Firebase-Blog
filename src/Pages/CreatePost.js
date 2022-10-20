import React, { useEffect, useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../firebase-config"
import { useNavigate } from "react-router-dom"


export default function CreatePost({isAuth}){

    let navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    const postCollectionRef = collection(db, 'posts')
    const createPost = async () => {
        await addDoc(postCollectionRef, {
            title, 
            postText, 
            author:{
                name: auth.currentUser.displayName, 
                id: auth.currentUser.uid
            }})
        navigate('/')
    }
 useEffect(()=>{
    if (!isAuth){
        navigate('/login')
    }
 },[isAuth, navigate])


    return(
        <div className="createPostPage">
        <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp"> 
        <label>Title:</label>
        <input placeholder="Title..." 
        onChange={(e)=> { 
            setTitle(e.target.value) 
        }}
        />
        </div>
        <div className="inputGp">
        <label>Post:</label>
        <textarea placeholder="Post..."
        onChange={(e)=> { 
            setPostText(e.target.value) 
        }}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
        </div>
        </div>
    )
}
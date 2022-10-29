// import { useState } from "react"
// import app from "../../firebase.init";
// import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
// import { useEffect } from "react";


// const auth = getAuth(app)
// const provider =new GoogleAuthProvider();

// const useFirebase =()=>{

// const[user , setUser]=useState({});

// useEffect(()=>{
//     onAuthStateChanged(auth,user=>{
//         setUser(user)
//     })
// },[])


// //handle sign In with google
// const signInGoogle =()=>{
//    signInWithPopup(auth,provider)
//    .then(result=>{
//     const user = result.user
//     setUser(user)
//     console.log(user)
//    })
// }

// //handle sign Out 

// const handleSignOut =()=>{
//     signOut(auth)
//     .then(()=>{})
// }


// return{

// }

// }

// export default useFirebase;
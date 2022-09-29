import React, { useEffect, useState } from "react";
import Posts from "./postComponents/Posts"
import SinglePosts from "./postComponents/SinglePosts"
const axios = require('axios')


const App = () => {

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [singlePost, setSinglePost] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
      setLoading(false)
    }
    fetchData()
  }, [])


  const getSingle = async (e) => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
    setSinglePost(data.data)
    console.log(data.data)

  }

  const returnPost = () => {
    setSinglePost(null)
  }


  if (!loading && !singlePost) {
    return (
      <>
        <h1>POSTS:</h1>
        <Posts data={posts} getSingle={getSingle} />
      </>
    )
  } else if (!loading) {
    return (
      <>
        <h1>POSTS:</h1>
        <SinglePosts singlePost={singlePost} returnPost={returnPost} />
      </>
    )
  } else {
    return <h1>Loading...</h1>
  }

}


export default App



































































// const App = () => {

//   const [posts, setPosts] = useState([])
//   const [singlePost, setSinglePost] = useState(null)
//   const [loading, setLoading] = useState(true)
//   //make state and state changes in Parent component

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//       setPosts(response.data)
//       setLoading(false)
//     }
//     fetchData()
//   }, [])


//   const getSingle = async (e) => {
//     let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
//     setSinglePost(response.data)

//   }

//   const returnPost = () => {
//     setSinglePost(null)
//   }


//   if (!loading && !singlePost) {
//     return (
//       <>
//         <h1>Here are Posts</h1>
//         <Posts data={posts} getSingle={getSingle} />
//       </>
//     )
//   } else if (!loading) {
//     return <SinglePosts singlePost={singlePost} returnPost={returnPost} />
//   } else {
//     return <h1>Loading...</h1>
//   }







// }


// export default App
























































































// import LoggedIn from "./components/loggedIn.js";
// import NotLoggedIn from "./components/notLoggedIn.js";
// import NotLoggedBtn from "./components/notLoggedBtn.js"


// export default App;
// function App() {

//   const [loggedIn, setloggedIn] = useState(false)

//   useEffect(() => {
//     if (loggedIn) {
//       document.title = 'Home page'
//     } else {
//       document.title = 'Login page'
//     }
//   })

//   const handleChange = () => {
//     setloggedIn(true)
//   }


//   if (loggedIn) {
//     return <LoggedIn />
//   } else {
//     return (
//       <>
//         <NotLoggedIn />
//         <NotLoggedBtn handleChange={handleChange} />
//       </>

//     )
//   }


// }
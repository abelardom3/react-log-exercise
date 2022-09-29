import React from "react";

const SinglePost = ({ singlePost, returnPost }) => {

    const handleClick = () => {
        returnPost()
    }

    return (
        <>
            <h1>Title</h1>
            <p>{singlePost.title}</p>
            <p>{singlePost.body}</p>
            <button onClick={handleClick}>Go back</button>
        </>
    )

}


export default SinglePost









































// import React from "react";


// const SinglePosts = ({ singlePost, returnPost }) => {

//     return (
//         <>
//             <h1>Title: <span>{singlePost.title}</span></h1>
//             <p>{singlePost.body}</p>
//             <button onClick={returnPost}>Return</button>
//         </>
//     )

// }



// export default SinglePosts




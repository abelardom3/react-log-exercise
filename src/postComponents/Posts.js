import React from "react"


const Posts = ({ data, getSingle }) => {

    const handleClick = (e) => {
        getSingle(e)
    }

    return (
        <>
            <ul>
                {data.map(elem => (
                    <li key={elem.id} id={elem.id} onClick={handleClick}>{elem.title}</li>
                ))}
            </ul>

        </>
    )
}


export default Posts














































// import React from "react";


// const Posts = ({ data, getSingle }) => {
//     return (
//         <>
//             <ul>
//                 {data.map(elem =>
//                     <li key={elem.id}
//                         id={elem.id}
//                         onClick={getSingle}
//                     >{elem.title}</li>)}
//             </ul>
//         </>
//     )
// }


// export default Posts











// import React, { useState } from 'react'

// const ExploreCard = ({explore, index}) => {


//     const [position, setPosition] = useState({x: 0, y: 0})
//     const [visible, setVisible] = useState(false)

//   return (
//     <div className=' overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'>
//       <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{top:position.y - 150, left: position.x - 150}}>
//         <div>
//             <div>
//                 <h1>Img</h1>
//             </div>
//             <div>
//                 <h3>{explore.title}</h3>
//                 <p>{explore.description}</p>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ExploreCard

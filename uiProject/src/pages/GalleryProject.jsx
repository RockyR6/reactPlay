import axios from "axios";
import { useEffect, useState } from "react";

const GalleryProject = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(3)

  const getData = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );
    setUserData(data);
  };


  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
        📸 Ouer Collection
      </h1>

      {/* Gallery Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userData.map((elem) => (
          <a
            key={elem.id}
            href={elem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={elem.download_url}
                  alt={elem.author}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Author */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center text-gray-200 group-hover:text-white">
                  {elem.author}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center p-4">
        <button style={{opacity: index === 1 ? 0.5 : 1}} onClick={()=>{if(index>1){setIndex(index - 1)}}} className="bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold m-1.5 cursor-pointer active:scale-95">Prev</button>
        <h2 className="text-xl p-2">Page: {index}</h2>
        <button onClick={()=>setIndex(index + 1)} className="bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold m-1.5 cursor-pointer active:scale-95">Next</button>
      </div>
    </div>
  );
};

export default GalleryProject;

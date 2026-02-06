// understanding the tow way binding
import { useState } from "react"



const TwoWayBinding = () => {


    const [num, setNum] = useState(20)
    const [title, setTitle] = useState('')
    const [store, setStore] = useState([])

    function increament() {
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
    setNum(prev => prev + 1)
  }

  let submitHandler = (e) => {
    e.preventDefault()

    const copy = [...store]
    copy.push({ title })

    setStore(copy)
    setTitle('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...store]

    copyTask.splice(idx,1) // idx = which one ; 1 = how many

    setStore(copyTask)
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Notes App
        </h1>

        <form 
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className="flex gap-3 mb-6"
        >
          <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Enter your name"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={submitHandler}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <div className="space-y-3">
          {store.map((e, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-3"
              >
                <h1 className="text-lg font-medium text-gray-800">
                  {e.title}
                </h1>

                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TwoWayBinding

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center gap-6">
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white w-14 h-14 rounded-full font-bold text-2xl shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
      >
        −
      </button>
      
      <span className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent min-w-[120px] text-center">
        {count}
      </span>
      
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-14 h-14 rounded-full font-bold text-2xl shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
      >
        +
      </button>
    </div>
  </div>
</div>
  )
}
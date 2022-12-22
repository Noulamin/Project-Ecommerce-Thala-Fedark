import React from 'react'
import './CommentStyle.css'

function CommentaireProduct() {
  return (
    <>
  <div className="mb-6">
    <h1 className=" font-bold mb-2 text-gray-900 dark:text-white">please give our comment : </h1>
    <input className="bg-gray-50 border  comment border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
    <button className='mt-4 button'>SUBMIT COMMENT</button>
  </div>
    </>
  )
}
export default CommentaireProduct
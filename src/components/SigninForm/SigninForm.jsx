import React from 'react';


export default function SigninForm({ changeAction, submitAction }) {
  return (
    <form className='flex flex-col items-center justify-center'>
      <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input
        className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="username"
        type="text"
        placeholder="Username"
        onChange={changeAction}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-70"
        onClick={submitAction}>
        Sign-In
      </button>
    </form>
  )
}

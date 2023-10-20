import React from 'react'


export const Chat = () => {
  return (
    <>
    <header className="flex bg-violet-600 h-16 ">
        <span className="text-zinc-50 mt-4 font-bold text-lg ">Jasmina</span>
    </header> 
    <div>Message  Area</div>
    <div  className='absolute bg-gray-200 bottom-0 w-full p-8 shadow-lg'>
      <form className='containerWrap flex '>
        <input className="input w-full focus:outline-none bg-gray-100 rounded-r-none " type="text"/>
        <button className='w-auto h-10 bg-gray-800 text-sm text-white rounded-r-lg px-5 '>Send</button>
      </form>
    </div>
    
    </>
  )
}
export default Chat;


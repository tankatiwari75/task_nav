import React,{useEffect,useState} from "react";
import { useForm } from "react-hook-form";

export const Chat = () => {
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/api/message/list");
      const json = await data.json();
      setMessageList(json);
    };

    fetchData().catch(console.error);
    
  }, [])
  const { register, handleSubmit, errors } = useForm();

  const submitMessage = async (data) => {
    console.log("message", data);
    try {
      const response = await fetch("http://localhost:3001/api/message", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user:"Jasmina",message:data.message}),
      });

      if (response.ok) {
        const data = await response.json();
        setMessageList(data)
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <>
    
      <header className="flex bg-violet-600 h-16 ">
        <span className="text-zinc-50 mt-4 font-bold text-lg ">Jasmina</span>
      </header>
      {messageList.map((item)=>
      <div> {item.message}</div>
      
    )}
  
      <div className="absolute bg-gray-200 bottom-0 w-full p-8 shadow-lg">
        <form
          className="containerWrap flex "
          onSubmit={handleSubmit(submitMessage)}
        >
          <input
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none "
            type="text"
            name="message"
            {...register("message")}
          />
          <button className="w-auto h-10 bg-gray-800 text-sm text-white rounded-r-lg px-5 ">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default Chat;

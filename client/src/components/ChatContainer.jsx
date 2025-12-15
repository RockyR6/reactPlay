import { useContext, useRef, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import assets from "../assets/assets";
import { formatMessageTime } from '../lib/utils'

const ChatContainer = () => {
  const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext)

  const scrollEnd = useRef()
  const [input, setInput] = useState('')

  //handle sending a message
  const handleSendMessage = async(e) =>{
    e.preventDefault()
    if(input.trim() === '') return
    await sendMessage({text: input.trim()})
  }

  return selectedUser ? (
    <div className="h-full overflow-hidden relative backdrop-blur-l flex flex-col">
      {/* header */}
      <div className="flex items-center gap-3 mx-3 border-b border-stone-500">
        <img
          src={selectedUser?.profilePic}
          alt="profilePic"
          className="w-8 rounded-full"
        />
        <p className="flex flex-1 text-lg text-white items-center gap-2">
          {selectedUser.fullName}
          {onlineUsers.includes(selectedUser._id) && (
            <span className="w-2 h-2 rounded-full"></span>
          )}
          </p>
          <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className="md:hidden max-w-7"
        />
        <img src={assets.help_icon} alt="" className="max-md:hidden max-w-5" />
        
      </div>
      {/* chat area */}
      <div className="flex-1 overflow-y-auto p-3 pb-6"></div>
      {messages.map((msg, index) => (
        <div className={`flex items-end gap-2 justify-end ${msg.senderId !== authUser._id && 'flex-row-reverse'}`}>
          {msg.image ? (
            <img src={msg.image} className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"/>
          ) : (
            <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === authUser._id ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
          )}
          <div className="text-center text-xs">
            <img src={msg.senderId === authUser._id? authUser?.profilePic ||assets.avatar_icon : selectedUser?.profilePic || assets.arrow_icon } alt="" className=" w-8 rounded-full" />
            <p className="text-gray-500">{formatMessageTime(msg.createdAt)}</p>
          </div>
          </div>
      ))}
      <div ref={scrollEnd}></div>
      {/*-------- bottom area --------*/}
      <div className="sticky bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input type="text" 
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={(e) => e.key === 'Enter' ? handleSendMessage(e) : null}
          placeholder="Send a message"
          className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400 bg-transparent"
          />
        </div>
      </div>
    </div>
     
      

  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.chat_big} alt="" className="max-w-16" />
      <h1 className="max-w-16">Chat anytime anywhere</h1>
    </div>
  );
};

export default ChatContainer;

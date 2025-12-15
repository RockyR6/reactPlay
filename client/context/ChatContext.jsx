import { useContext, createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from './AuthContext'





export const ChatContext = createContext()

export const ChatProvider = ({children}) => {

    const [users, setUsers] = useState([]);
    const [unseenMessages, setUnseenMessages] = useState({});
    const [messages, setMessages] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);

    const {socket, axios} = useContext(AuthContext)

    //get all users
    const getUsers = async() =>{
        try {
            const {data} = await axios.get('/api/messages/users')
            if(data.success){
                setUsers(data.users)
                setUnseenMessages(data.unseenMessages)
            }
        } catch (error) {
            console.log(`Error in getUsers/ChatContext.js: ${error}`)
            toast.error(error.message)
        }
    }

    //get messages for seleccted user
 const getMessages = async(userId) =>{
    try {
        const {data} = await axios.get(`/api/messages/${userId}`)
        if(data.success){
           setMessages(data.message)
        }
    } catch (error) {
        console.error(`Error in getMessages/ChatContext.js: ${error}`);
        toast.error(error.message);
    }
 }
//send message to selected user
const sendMessage = async(messageData) => {
    try {
        const {data} = await axios.post(`/api/messages/send/${selectedUser._id}`, messageData)
        if(data.success){
            setMessages((prevMessages) => [...prevMessages, data.newMessage])
        }else{
            console.error('Error in sendMessage/ChatContext')
            toast.error(data.message)
        }
    } catch (error) {
        console.log(`Error in sendMessage/ChatContext: ${error}`)
        toast.error(data.message)
    }
}
//handle real-time incoming messages
const subscribeToMessages = (newMessage) =>{
    if(selectedUser && newMessage.senderId === selectedUser._id){
        newMessage.seen = true
        setMessages((prevMessages) => [...prevMessages, newMessage])

        //handle possible error from axios.put
        axios.put(`/api/messages/mark/${newMessage._id}`).catch(err =>{
            console.log('Failed to mark message as seen', err)
        })
    }else{
        setUnseenMessages((prev) => ({
            ...prev,
            [newMessage.senderId]: prev[newMessage.senderId]
            ? prev[newMessage.senderId] + 1
            : 1
        }))
    }
}

//unsubscribe from socket
const unsubscribeFromMessages = () =>{
    if(socket) socket.off('newMessage')
}

//subscribe when socket ot selectedUser changes
useEffect(() =>{
    if(socket){
        socket.on('newMessage', subscribeToMessages)
    }
    return () => unsubscribeFromMessages()
}, [socket, selectedUser, axios])

const value =  {
    messages,
    users,
    selectedUser,
    getUsers,
    getMessages,
    sendMessage,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages
}
return (
    <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>
)
}

